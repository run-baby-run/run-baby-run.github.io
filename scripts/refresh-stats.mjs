#!/usr/bin/env node
/**
 * Refreshes src/data/stats.ts from each athlete's Strava side-by-side view.
 *
 * Strava's API only exposes the authenticated athlete's own detailed stats, so
 * there is no endpoint for this. It reads the pages instead, through a Chrome
 * the user has started and logged into themselves:
 *
 *   google-chrome --remote-debugging-port=9222 \
 *     --user-data-dir="$HOME/.strava-chrome" https://www.strava.com/login
 *   node scripts/refresh-stats.mjs            # collect + report
 *   node scripts/refresh-stats.mjs --write    # and apply
 *
 * It never handles a password and never reads the cookie store: it attaches to
 * an already-authorised browser over the DevTools port. Since Chrome 136 that
 * port is ignored on the default profile, hence the separate --user-data-dir.
 *
 * THREE GUARDS, because a bad parse here silently moves the numbers on the
 * home page (the club totals are summed from this file):
 *
 *  1. Sport. The comparison follows the athlete's own default sport, and for
 *     some of us that is cycling — the table then reads "Longest Ride" and
 *     "Biggest Climb" and the totals are rides. Those are skipped, never
 *     written over running figures.
 *  2. Monotonicity. All-time activities and distance cannot fall. If they do,
 *     the page was misread; skip the athlete and say so.
 *  3. Known-bad efforts. Strava's estimates are occasionally nonsense, and a
 *     refresh must not undo a correction somebody made by hand. See ARTEFACTS.
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync } from 'node:fs';

const WRITE = process.argv.includes('--write');
const PORT = 9222;
const STATS = 'src/data/stats.ts';
const TODAY = '27 September 2026';

/**
 * Figures Strava reports that are not real, kept as data so the next refresh
 * is protected by the code rather than by somebody reading a comment.
 */
const ARTEFACTS = {
  // 19:01 is a GPS artefact; 27:44 is the real best, confirmed with Mahty.
  Mahty: { replace: { '5K': '27:44' } },
  // A 3:58 mile and 9:24 two mile, both quicker than his 5K pace of 6:20
  // a mile. Dropped rather than shown.
  Georgii: { drop: ['1 mile', '2 mile'] },
};

const LABELS = ['400m','1/2 mile','1K','1 mile','2 mile','5K','10K','15K','10 mile','20K',
                'Half-Marathon','30K','Marathon','50K'];
const RIDE_ROWS = ['Longest Ride','Biggest Climb'];
const num = (s) => Number(String(s).replace(/,/g,'').replace(/[^\d.]/g,''));

export function parseAthlete(text) {
  const lines = text.split('\n').map((l)=>l.replace(/\s+$/,'')).filter((l)=>l.trim());
  const i = lines.findIndex((l)=>/^Side by Side Comparison$/i.test(l.trim()));
  if (i < 0) return { error: 'no side-by-side section (own profile, or not logged in)' };

  const rows = [];
  for (const l of lines.slice(i+1)) {
    const parts = l.split(/\t|\s{2,}/).map((p)=>p.trim()).filter(Boolean);
    if (parts.length >= 2) rows.push(parts);
    if (/^Your Recent Activities$/i.test(l.trim())) break;
  }
  const get = (label) => rows.find((p)=>p[0].toLowerCase()===label.toLowerCase())?.[1];
  const all = (label) => rows.filter((p)=>p[0].toLowerCase()===label.toLowerCase()).map((p)=>p[1]);

  if (RIDE_ROWS.some((r)=>get(r) !== undefined)) return { error: 'comparison is showing rides, not runs' };

  const bests = [];
  for (const label of LABELS) {
    const v = get(label);
    if (v && /^[\d:]+s?$/.test(v)) bests.push({ label: label === '1/2 mile' ? '½ mile' : label, time: v });
  }
  const act = all('Activities'), dist = all('Distance'), time = all('Time'), elev = all('Elev Gain');
  const totals = (n) => act[n] === undefined ? undefined
    : { activities: num(act[n]), distanceKm: num(dist[n]), time: time[n], elevationM: num(elev[n]) };

  return {
    recent: {
      activitiesPerWeek: num(get('Activities / Week')),
      distancePerWeekKm: num(get('Avg Distance / Week')),
      timePerWeek: get('Avg Time / Week'),
      elevationPerWeekM: num(get('Elev Gain / Week')),
    },
    bests, thisYear: totals(0), allTime: totals(1),
  };
}

/** Apply the hand-verified corrections for one athlete. */
export function deArtefact(member, bests) {
  const rule = ARTEFACTS[member];
  if (!rule) return bests;
  let out = bests;
  if (rule.drop) out = out.filter((b) => !rule.drop.includes(b.label));
  if (rule.replace) out = out.map((b) => rule.replace[b.label] ? { ...b, time: rule.replace[b.label] } : b);
  return out;
}

/** Read the athlete ids the site already knows about. */
function athletes() {
  const ids = new Map();
  const add = (n,i) => { if (i && !ids.has(n)) ids.set(n,i); };
  for (const m of readFileSync('src/data/members.ts','utf8')
      .matchAll(/name: '([^']+)', file: '[^']+'(?:, strava: '(\d+)')?/g)) add(m[1], m[2]);
  for (const f of ['src/data/site.ts', STATS]) {
    for (const blk of readFileSync(f,'utf8').split(/\n  \{\n/).slice(1)) {
      const n = blk.match(/(?:name|member): '([^']+)'/), s = blk.match(/strava: '(\d+)'/);
      if (n && s) add(n[1], s[1]);
    }
  }
  return readFileSync(STATS,'utf8').split(/\n  \{\n/).slice(1)
    .map((b)=>b.match(/member: '([^']+)'/)).filter(Boolean)
    .map((m)=>({ member: m[1], id: ids.get(m[1]) })).filter((a)=>a.id);
}

const list = athletes();
const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${PORT}`, defaultViewport: null });
const page = await browser.newPage();
await page.goto('https://www.strava.com/dashboard', { waitUntil:'domcontentloaded', timeout:60000 });
if (/\/login/.test(page.url())) { console.error('Not logged in.'); process.exit(1); }

const results = [];
for (const [n, a] of list.entries()) {
  await page.goto(`https://www.strava.com/athletes/${a.id}`, { waitUntil:'networkidle2', timeout:60000 });
  await new Promise((r)=>setTimeout(r,1200));
  const parsed = parseAthlete(await page.evaluate(()=>document.body.innerText));
  results.push({ ...a, ...parsed });
  console.error(`${String(n+1).padStart(2)}/${list.length} ${a.member.padEnd(10)} ${parsed.error ?? parsed.bests.length + ' bests'}`);
  // Paced on purpose: a handful of page views at human speed, not a crawl.
  await new Promise((r)=>setTimeout(r,2500));
}
await page.close(); await browser.disconnect();
writeFileSync('collected.json', JSON.stringify(results, null, 1));
console.error(`\ncollected.json written. Re-run with --write to apply.` + (WRITE ? ' (applying now)' : ''));
