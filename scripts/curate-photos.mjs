#!/usr/bin/env node
/**
 * Thins each day's photos down to the ones worth looking at.
 *
 * Two passes, both mechanical:
 *   1. near-duplicates — the burst of eight shots of the same pose becomes one,
 *      grouped by a perceptual hash so a crop or a re-send still collapses
 *   2. quality — within a group, keep the sharpest, biggest frame
 *
 * It cannot tell whether a photo is interesting; that is the eye's job. So it
 * also writes contact sheets, one per day, for a human pass afterwards.
 *
 *   node scripts/curate-photos.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const OUT = join(process.cwd(), 'diary');
const SHEETS = join(OUT, 'sheets');

/**
 * A 64-bit difference hash: each bit says whether a pixel is brighter than the
 * one to its right. Robust to re-compression and resizing, which is exactly
 * what WhatsApp does to the same photo sent twice.
 */
async function dhash(file) {
  const { data } = await sharp(file)
    .rotate()
    .greyscale()
    .resize(9, 8, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let bits = 0n;
  for (let y = 0; y < 8; y++)
    for (let x = 0; x < 8; x++)
      bits = (bits << 1n) | (data[y * 9 + x] > data[y * 9 + x + 1] ? 1n : 0n);
  return bits;
}

const hamming = (a, b) => {
  let v = a ^ b, n = 0;
  while (v) { n += Number(v & 1n); v >>= 1n; }
  return n;
};

/** Variance of a crude Laplacian: high on a sharp frame, low on a blurred one. */
async function sharpness(file) {
  const S = 160;
  const data = await sharp(file).rotate().greyscale().resize(S, S, { fit: 'fill' }).raw().toBuffer();
  let sum = 0, sq = 0, n = 0;
  for (let y = 1; y < S - 1; y++)
    for (let x = 1; x < S - 1; x++) {
      const i = y * S + x;
      const l = 4 * data[i] - data[i - 1] - data[i + 1] - data[i - S] - data[i + S];
      sum += l; sq += l * l; n++;
    }
  return sq / n - (sum / n) ** 2;
}

const days = JSON.parse(readFileSync(join(OUT, 'drafts.json'), 'utf8'));
mkdirSync(SHEETS, { recursive: true });

let kept = 0, dropped = 0;
const report = [];

for (const day of days) {
  const shots = [];
  for (const m of day.media) {
    if (!/\.(jpe?g|png|webp)$/i.test(m.file)) continue;
    const src = join(m.dir, m.file);
    if (!existsSync(src)) continue;
    const meta = await sharp(src).metadata();
    shots.push({ ...m, src, hash: await dhash(src), sharp: await sharpness(src), px: meta.width * meta.height });
  }

  // Group by hash distance. A threshold of 10 catches the same moment shot
  // twice; below about 8 it starts splitting bursts that are plainly the same.
  const groups = [];
  for (const s of shots) {
    const g = groups.find((g) => g.some((o) => hamming(o.hash, s.hash) <= 10));
    if (g) g.push(s); else groups.push([s]);
  }

  // Best of each group: sharpness first, then pixels, so a crisp small frame
  // beats a big soft one.
  const picks = groups.map((g) =>
    g.slice().sort((a, b) => b.sharp - a.sharp || b.px - a.px)[0]
  );

  kept += picks.length;
  dropped += shots.length - picks.length;
  report.push({
    date: day.date,
    weekday: day.weekday,
    before: shots.length,
    after: picks.length,
    picks: picks.map((p) => ({ file: p.file, time: p.time, sender: p.sender, group: groups.find((g) => g.includes(p)).length })),
  });

  // Contact sheet, numbered, so the picks can be talked about by index.
  const COLS = 6, CELL = 260;
  const rows = Math.ceil(picks.length / COLS);
  if (!rows) continue;
  const tiles = await Promise.all(
    picks.map(async (p, i) => ({
      input: await sharp(p.src).rotate().resize(CELL, CELL, { fit: 'cover' })
        .composite([{
          input: Buffer.from(
            `<svg width="${CELL}" height="${CELL}"><rect x="0" y="0" width="54" height="34" rx="8" fill="#111"/>` +
            `<text x="27" y="24" font-family="sans-serif" font-size="20" fill="#fff" text-anchor="middle">${i + 1}</text></svg>`
          ),
          top: 0, left: 0,
        }])
        .jpeg({ quality: 78 }).toBuffer(),
      top: Math.floor(i / COLS) * CELL,
      left: (i % COLS) * CELL,
    }))
  );
  await sharp({ create: { width: COLS * CELL, height: rows * CELL, channels: 3, background: '#faf7f2' } })
    .composite(tiles)
    .jpeg({ quality: 80 })
    .toFile(join(SHEETS, `${day.date}.jpg`));
}

writeFileSync(join(OUT, 'photos.json'), JSON.stringify(report, null, 2));
console.log(`kept ${kept}, dropped ${dropped} near-duplicates`);
console.log(`contact sheets in diary/sheets/, one per day`);
