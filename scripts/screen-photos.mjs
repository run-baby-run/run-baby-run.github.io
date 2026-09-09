#!/usr/bin/env node
/**
 * Separates photographs from the other things people send.
 *
 * A WhatsApp group is half pictures and half schedule screenshots, race
 * posters, stickers and memes. None of the latter belong in a diary, and they
 * are easy to tell apart without looking: a photograph has gradients almost
 * everywhere, while anything drawn or rendered has large areas of exactly one
 * colour, and text on white has next to no saturation.
 *
 * Writes diary/screened.json and two contact sheets per day so both the keeps
 * and the drops can be checked by eye.
 *
 *   node scripts/screen-photos.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const KEPT = 'diary/sheets', DROPPED = 'diary/sheets-dropped';
mkdirSync(DROPPED, { recursive: true });

const days = JSON.parse(readFileSync('diary/photos.json', 'utf8'));
const drafts = JSON.parse(readFileSync('diary/drafts.json', 'utf8'));
const dirOf = new Map();
for (const d of drafts) for (const m of d.media) dirOf.set(m.file, m.dir);

/**
 * modal — share of pixels holding the single most common exact colour
 *
 * This is the giveaway. A camera puts noise on every surface, so even a blank
 * white wall never repeats one exact RGB value much: photographs sit under 2%.
 * Anything rendered — a schedule, a poster, a sticker — is built from flat fills
 * and lands between 25% and 60%. Brightness-based flatness was tried first and
 * failed: it threw away real photographs taken indoors against plain walls.
 */
async function metrics(file) {
  const S = 200;
  // Nearest-neighbour on purpose: a smooth resize would average the very noise
  // this measurement depends on.
  const { data, info } = await sharp(join(dirOf.get(file), file))
    .rotate().resize(S, S, { fit: 'fill', kernel: 'nearest' })
    .raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const seen = new Map();
  for (let i = 0; i < data.length; i += ch) {
    const key = (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
    seen.set(key, (seen.get(key) || 0) + 1);
  }
  let top = 0;
  for (const v of seen.values()) if (v > top) top = v;
  return { modal: top / (S * S), colours: seen.size / (S * S) };
}

/** Thresholds checked by eye against two full days; see the sheets to re-check. */
function isPhoto(file, m) {
  if (/^STK-/i.test(file) || /\.webp$/i.test(file)) return false; // stickers
  return m.modal < 0.25;
}

async function sheet(picks, out) {
  const COLS = 6, CELL = 260;
  if (!picks.length) return;
  const rows = Math.ceil(picks.length / COLS);
  const tiles = await Promise.all(picks.map(async (p, i) => ({
    input: await sharp(join(dirOf.get(p.file), p.file)).rotate().resize(CELL, CELL, { fit: 'cover' })
      .composite([{ input: Buffer.from(
        `<svg width="${CELL}" height="${CELL}"><rect x="0" y="0" width="54" height="34" rx="8" fill="#111"/>` +
        `<text x="27" y="24" font-family="sans-serif" font-size="20" fill="#fff" text-anchor="middle">${i + 1}</text></svg>`
      ), top: 0, left: 0 }])
      .jpeg({ quality: 78 }).toBuffer(),
    top: Math.floor(i / COLS) * CELL, left: (i % COLS) * CELL,
  })));
  await sharp({ create: { width: COLS * CELL, height: rows * CELL, channels: 3, background: '#faf7f2' } })
    .composite(tiles).jpeg({ quality: 80 }).toFile(out);
}

let kept = 0, dropped = 0;
for (const day of days) {
  const keeps = [], drops = [];
  for (const p of day.picks) {
    const m = await metrics(p.file);
    Object.assign(p, m);
    (isPhoto(p.file, m) ? keeps : drops).push(p);
  }
  day.picks = keeps;
  day.dropped = drops.map((d) => d.file);
  kept += keeps.length; dropped += drops.length;
  await sheet(keeps, join(KEPT, `${day.date}.jpg`));
  await sheet(drops, join(DROPPED, `${day.date}.jpg`));
}

writeFileSync('diary/screened.json', JSON.stringify(days, null, 2));
console.log(`photographs: ${kept} · screenshots, posters and stickers removed: ${dropped}`);
