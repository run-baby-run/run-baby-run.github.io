#!/usr/bin/env node
/**
 * Applies collected.json (from scripts/refresh-stats.mjs) to src/data/stats.ts.
 *
 *   node scripts/apply-stats.mjs           # report only
 *   node scripts/apply-stats.mjs --write   # rewrite the file
 *
 * Every athlete must survive the monotonic check before a single field of
 * theirs is touched: all-time activities and distance cannot fall, so if they
 * do, the page was misread and the athlete is left exactly as they were.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { deArtefact } from './refresh-stats-lib.mjs';

/**
 * A longer distance cannot be run at a quicker pace than a shorter one. Strava
 * estimates break this often enough to matter — Ashot briefly topped the club
 * 10K board on a 40:12 that was quicker per kilometre than his own 5K. Warned
 * about rather than dropped: at the short end (400m against 1K) the estimates
 * are noisy and a real effort can look odd, so a person should decide.
 */
const KM = { '400m':0.4, '½ mile':0.8047, '1K':1, '1 mile':1.609, '2 mile':3.219, '5K':5,
  '10K':10, '15K':15, '10 mile':16.09, '20K':20, 'Half-Marathon':21.0975, '30K':30,
  'Marathon':42.195, '50K':50 };
const toSec = (t) => (t.includes(':') ? t.split(':').map(Number).reduce((a, b) => a * 60 + b, 0) : Number(t.replace('s','')));

function pacewarnings(member, bests) {
  const out = [];
  const xs = bests.filter((b) => KM[b.label])
    .map((b) => ({ ...b, km: KM[b.label], pace: toSec(b.time) / KM[b.label] }))
    .sort((a, b) => a.km - b.km);
  for (let i = 1; i < xs.length; i++) {
    const slowest = xs.slice(0, i).reduce((w, c) => (c.pace > w.pace ? c : w));
    if (xs[i].pace < slowest.pace * 0.97 && xs[i].km >= 5) {
      out.push(`${member}: ${xs[i].label} ${xs[i].time} is quicker per km than ${slowest.label} ${slowest.time}`);
    }
  }
  return out;
}

const WRITE = process.argv.includes('--write');
const TODAY = '27 September 2026';
const STATS = 'src/data/stats.ts';

const warnings = [];
const got = JSON.parse(readFileSync('collected.json', 'utf8'));
let src = readFileSync(STATS, 'utf8');
const skipped = [], applied = [];

for (const g of got) {
  const re = new RegExp(`(\\n  \\{\\n(?:(?!\\n  \\},)[\\s\\S])*?member: '${g.member.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?)\\n  \\},`);
  const m = src.match(re);
  if (!m) { skipped.push([g.member, 'not found in stats.ts']); continue; }
  const blk = m[1];

  if (g.error) { skipped.push([g.member, g.error]); continue; }
  if (!g.allTime || !g.thisYear) { skipped.push([g.member, 'totals missing']); continue; }

  const cur = blk.match(/allTime: \{ activities: (\d+), distanceKm: ([\d.]+)/);
  if (cur && (g.allTime.activities < +cur[1] || g.allTime.distanceKm < +cur[2] - 0.05)) {
    skipped.push([g.member, `all-time fell (${cur[1]}→${g.allTime.activities} activities) — misread`]);
    continue;
  }

  const bests = deArtefact(g.member, g.bests);
  warnings.push(...pacewarnings(g.member, bests));
  if (!bests.length) { skipped.push([g.member, 'no best efforts parsed']); continue; }

  const t = (o) => `{ activities: ${o.activities}, distanceKm: ${o.distanceKm}, time: '${o.time}', elevationM: ${o.elevationM} }`;
  let out = blk
    .replace(/recent: \{[^}]*\}/, `recent: { activitiesPerWeek: ${g.recent.activitiesPerWeek}, distancePerWeekKm: ${g.recent.distancePerWeekKm}, timePerWeek: '${g.recent.timePerWeek}', elevationPerWeekM: ${g.recent.elevationPerWeekM} }`)
    .replace(/bests: \[[\s\S]*?\n    \],/, 'bests: [\n' + bests.map((b) => `      { label: '${b.label}', time: '${b.time}' },`).join('\n') + '\n    ],')
    .replace(/thisYear: \{[^}]*\}/, `thisYear: ${t(g.thisYear)}`)
    .replace(/allTime: \{[^}]*\}/, `allTime: ${t(g.allTime)}`);
  out = /captured: '[^']*'/.test(out)
    ? out.replace(/captured: '[^']*'/, `captured: '${TODAY}'`)
    : out.replace(/(member: '[^']*',)/, `$1\n    captured: '${TODAY}',`);

  src = src.replace(blk, out);
  applied.push(g.member);
}

console.log(`applied  ${applied.length}: ${applied.join(', ')}`);
console.log(`\nskipped  ${skipped.length}:`);
for (const [n, why] of skipped) console.log(`  ${n.padEnd(10)} ${why}`);
if (warnings.length) {
  console.log('\nCHECK BY HAND — a longer distance quicker per km than a shorter one:');
  for (const w of warnings) console.log('  ' + w);
}
if (WRITE) { writeFileSync(STATS, src); console.log('\nstats.ts written.'); }
else console.log('\n(report only — pass --write to apply)');
