#!/usr/bin/env node
/**
 * Turns WhatsApp chat exports into diary drafts.
 *
 * Reads one or more export folders (the .txt plus its media), merges them,
 * groups everything by day, and writes:
 *
 *   diary/drafts.json   one record per day that has photos
 *   diary/thumbs/       a small webp of every candidate photo
 *   diary/review.html   a contact sheet: open it, tick the keepers
 *
 * Nothing here touches src/. The export and everything this writes stay out
 * of git — only the photos chosen in review get resized into src/assets.
 *
 *   node scripts/import-whatsapp.mjs ["export dir" ...]
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const OUT = join(ROOT, 'diary');
const THUMBS = join(OUT, 'thumbs');

/** Every export folder given, or every one sitting in the repo root. */
function exportDirs() {
  const given = process.argv.slice(2);
  if (given.length) return given;
  return readdirSync(ROOT)
    .filter((f) => f.startsWith('WhatsApp Chat with') && statSync(join(ROOT, f)).isDirectory())
    .map((f) => join(ROOT, f));
}

const HEAD = /^(\d{1,2})\/(\d{1,2})\/(\d{2}), (\d{1,2}):(\d{2})(?::(\d{2}))?\s?([AP]M)? - (.*)$/;
const ATTACHED = /^(.+?) ‎?\(file attached\)$/;

/**
 * WhatsApp writes the date in the exporter's own locale. Decide which way
 * round it is by looking for a first component that cannot be a month.
 */
function dayFirst(lines) {
  for (const l of lines) {
    const m = HEAD.exec(l);
    if (m && Number(m[1]) > 12) return true;
  }
  return false;
}

function parse(dir) {
  const txt = readdirSync(dir).find((f) => f.endsWith('.txt'));
  if (!txt) throw new Error(`no .txt in ${dir}`);
  // Strip the U+200E marks WhatsApp sprinkles through attachment lines.
  const lines = readFileSync(join(dir, txt), 'utf8').replace(/‎/g, '').split('\n');
  const dmy = dayFirst(lines);
  const out = [];

  for (const line of lines) {
    const m = HEAD.exec(line);
    if (!m) {
      // A continuation of the previous message, not a new one.
      if (out.length) out[out.length - 1].text += '\n' + line;
      continue;
    }
    const [, a, b, yy, hh, mm, , ap, rest] = m;
    const day = Number(dmy ? a : b);
    const month = Number(dmy ? b : a);
    let hour = Number(hh);
    if (ap) hour = (hour % 12) + (ap === 'PM' ? 12 : 0);

    const date = `20${yy}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const time = `${String(hour).padStart(2, '0')}:${mm}`;

    const sep = rest.indexOf(': ');
    if (sep === -1) {
      out.push({ date, time, dir, system: rest, sender: null, text: '', file: null });
      continue;
    }
    const sender = rest.slice(0, sep).replace(/^~\s*/, '').trim();
    const text = rest.slice(sep + 2);
    const att = ATTACHED.exec(text);
    out.push({ date, time, dir, system: null, sender, text: att ? '' : text, file: att ? att[1] : null });
  }
  return out;
}

/** One person, one day: joins and leaves are the club's growth curve. */
const JOINED = /joined using|was added|added ~?/i;
const LEFT = /left$/i;

function build(messages) {
  const days = new Map();
  const seen = new Set();

  for (const m of messages) {
    // Two exports of the same chat overlap; keep each message once.
    const key = `${m.date} ${m.time} ${m.sender ?? ''} ${m.file ?? m.text ?? m.system}`;
    if (seen.has(key)) continue;
    seen.add(key);

    if (!days.has(m.date)) {
      days.set(m.date, { date: m.date, media: [], messages: [], joins: 0, leaves: 0, people: new Set() });
    }
    const d = days.get(m.date);

    if (m.system) {
      if (JOINED.test(m.system)) d.joins++;
      else if (LEFT.test(m.system)) d.leaves++;
      continue;
    }
    d.people.add(m.sender);
    if (m.file) d.media.push({ file: m.file, dir: m.dir, time: m.time, sender: m.sender });
    else if (m.text.trim() && m.text !== 'null' && !m.text.includes('This message was deleted')) {
      d.messages.push({ time: m.time, sender: m.sender, text: m.text.trim() });
    }
  }

  return [...days.values()]
    .map((d) => ({ ...d, people: d.people.size }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

const WEEKDAY = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'UTC' });

async function thumbnail(m) {
  const src = join(m.dir, m.file);
  if (!existsSync(src)) return null;
  const out = join(THUMBS, m.file.replace(/\.[^.]+$/, '.webp'));
  if (existsSync(out)) return basename(out);
  if (!/\.(jpe?g|png|webp)$/i.test(m.file)) return null;
  try {
    await sharp(src).rotate().resize(360, 360, { fit: 'cover' }).webp({ quality: 62 }).toFile(out);
    return basename(out);
  } catch {
    return null; // A file the export lost, or one sharp cannot read.
  }
}

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function reviewPage(days) {
  const body = days
    .map((d) => {
      const shots = d.media
        .filter((m) => m.thumb)
        .map(
          (m) => `<label class="s"><input type="checkbox" value="${esc(m.file)}" checked />
            <img loading="lazy" src="thumbs/${esc(m.thumb)}" alt="" /><span>${esc(m.time)}</span></label>`
        )
        .join('');
      const chat = d.messages
        .map((m) => `<p><b>${esc(m.sender)}</b> <i>${esc(m.time)}</i><br />${esc(m.text)}</p>`)
        .join('');
      return `<section id="${d.date}">
        <h2>${d.date} <small>${WEEKDAY(d.date)} · ${d.media.length} files · ${d.messages.length} messages · ${d.people} people${d.joins ? ` · +${d.joins} joined` : ''}</small></h2>
        <div class="grid">${shots}</div>
        <details><summary>What was said that day</summary><div class="chat">${chat}</div></details>
      </section>`;
    })
    .join('');

  return `<!doctype html><meta charset="utf-8" /><title>Diary review</title>
<style>
 body{font:14px/1.5 system-ui;margin:0;background:#faf7f2;color:#111}
 header{position:sticky;top:0;background:#111;color:#fff;padding:.75rem 1rem;display:flex;gap:1rem;align-items:center;z-index:2}
 button{font:inherit;padding:.35rem .8rem;border-radius:999px;border:2px solid #fff;background:none;color:#fff;cursor:pointer}
 section{padding:1rem 1.25rem;border-bottom:2px solid #111}
 h2{margin:.2rem 0 .8rem;font-size:1.1rem} small{font-weight:400;color:#666}
 .grid{display:flex;flex-wrap:wrap;gap:.5rem}
 .s{position:relative;width:130px;cursor:pointer}
 .s img{width:130px;height:130px;object-fit:cover;border-radius:8px;display:block;opacity:.35;border:3px solid transparent}
 .s :checked ~ img{opacity:1;border-color:#e8608c}
 .s input{position:absolute;top:6px;left:6px;z-index:1;width:18px;height:18px}
 .s span{font-size:11px;color:#666}
 .chat{max-height:22rem;overflow:auto;background:#fff;padding:.75rem;border-radius:8px}
 .chat p{margin:0 0 .6rem} .chat b{font-size:12px} .chat i{font-size:11px;color:#888}
</style>
<header>
  <strong>Diary review</strong>
  <span>Untick anything that should not go on the site.</span>
  <button onclick="copyKeepers()">Copy the keepers</button>
  <span id="n"></span>
</header>
${body}
<script>
 const count = () => document.getElementById('n').textContent =
   document.querySelectorAll('.s input:checked').length + ' kept';
 addEventListener('change', count); count();
 function copyKeepers() {
   const out = {};
   for (const s of document.querySelectorAll('section')) {
     const keep = [...s.querySelectorAll('input:checked')].map(i => i.value);
     if (keep.length) out[s.id] = keep;
   }
   navigator.clipboard.writeText(JSON.stringify(out, null, 2));
   document.getElementById('n').textContent = 'copied';
 }
</script>`;
}

// ---- run ----
const dirs = exportDirs();
if (!dirs.length) {
  console.error('No export folder found. Put it in the repo root, or pass the path.');
  process.exit(1);
}
mkdirSync(THUMBS, { recursive: true });

const all = dirs.flatMap(parse);
const days = build(all);
const withPhotos = days.filter((d) => d.media.length >= 3);

for (const d of withPhotos) {
  for (const m of d.media) m.thumb = await thumbnail(m);
}

writeFileSync(
  join(OUT, 'drafts.json'),
  JSON.stringify(
    withPhotos.map((d) => ({ ...d, weekday: WEEKDAY(d.date) })),
    null,
    2
  )
);
writeFileSync(join(OUT, 'review.html'), reviewPage(withPhotos));

const first = days[0]?.date;
const last = days.at(-1)?.date;
const joins = days.reduce((n, d) => n + d.joins, 0);
const media = days.reduce((n, d) => n + d.media.length, 0);
console.log(`${dirs.length} export(s) · ${all.length} lines · ${first} → ${last}`);
console.log(`${media} media, ${joins} people joined, ${withPhotos.length} days with 3+ photos`);
console.log(`\nwrote diary/drafts.json and diary/review.html — open the second one in a browser`);
