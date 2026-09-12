#!/usr/bin/env node
/**
 * Re-renders every thumbnail in its own shape.
 *
 * They were square centre-crops, which is all a uniform grid needs. The mosaic
 * gallery lays photographs out at their true proportions, so a square crop
 * would be cropped a second time to fit a tall cell — showing the middle of
 * the middle. Source is the committed full-size WebP rather than the original
 * export, so this runs from a clean checkout.
 *
 *   node scripts/rebuild-thumbs.mjs
 */
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const THUMB = 400;
const root = 'public/photos';
let done = 0, bytes = 0;

for (const month of readdirSync(root).sort()) {
  const dir = join(root, month);
  if (!statSync(dir).isDirectory()) continue;
  for (const file of readdirSync(dir).sort()) {
    if (!file.endsWith('.webp') || file.endsWith('-t.webp')) continue;
    const full = join(dir, file);
    const thumb = join(dir, file.replace(/\.webp$/, '-t.webp'));
    // The full image is already rotated and capped at 1200, so no .rotate().
    await sharp(full)
      .resize(THUMB, THUMB, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 62 })
      .toFile(thumb + '.tmp');
    const { renameSync } = await import('node:fs');
    renameSync(thumb + '.tmp', thumb);
    bytes += statSync(thumb).size;
    done++;
  }
}
console.log(`${done} thumbnails, ${(bytes / 1e6).toFixed(1)} MB total`);
