#!/usr/bin/env node
/**
 * Cuts the club film: sixty seconds of our own footage under our own song.
 *
 * The short take of "Just Show Up" is 59.83 s, so the film is built to that
 * length exactly and every clip gets an equal slice of it. Clips are hard-cut,
 * not crossfaded — at a shade over a second each, a fade would eat most of the
 * shot.
 *
 * The 251 clips in the WhatsApp export are about half club footage and half
 * forwarded memes. A flat-colour screen catches the cartoons; the rest were
 * chosen by eye from contact sheets, and their indices are listed below.
 *
 *   node scripts/make-film.mjs
 */
import { readFileSync, mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const SONG = 'public/audio/just-show-up-3.mp3';
const OUT = 'public/video';
const TMP = 'diary/filmtmp';
/**
 * 576x1024 — nine by sixteen, and the exact size most of these clips already
 * are. This is phone footage: 40 of the 46 chosen clips were filmed portrait,
 * and on a 9:16 canvas the median clip keeps 100% of its frame and is not
 * scaled at all. Nothing is invented and nothing is thrown away.
 *
 * Three earlier attempts, for the record. 1280x720 upscaled 47 of 49 clips by a
 * median of 1.5x and cropped portrait shots to a third of their height: soft.
 * Fitting them inside 16:9 instead was sharp but left a small picture in a sea
 * of blur. Square at 720 was sharp and full-frame but still discarded 44% of
 * the median clip — the sky went missing from Republic Square.
 *
 * ffprobe's width and height are the CODED size and ignore rotation metadata,
 * which is what sent the first two attempts wrong: 69 clips are stored
 * landscape and played portrait.
 */
const W = 576, H = 1024, FPS = 30;

/**
 * Chosen by eye from diary/vpick/*.jpg — see diary/vindex.json for the map.
 *
 * Three were dropped for being 200 pixels across — 23, 163 and 171, all dogs.
 * Nothing can be done with a 200px source on a 1024px canvas; 111 keeps a dog
 * in the film.
 */
const PICKS = [
  3, 8, 11, 13, 17, 34, 38, 44, 47,
  50, 53, 63, 66, 74, 77, 79, 85, 91,
  106, 111, 113, 114, 119, 121, 122, 126, 130, 136, 138,
  149, 153, 154, 166, 168, 174, 187, 189,
  194, 197, 201, 205, 210, 217, 226, 233, 240,
];

const index = JSON.parse(readFileSync('diary/vindex.json', 'utf8'));
const meta = JSON.parse(readFileSync('diary/videos.json', 'utf8'));

const ffprobe = (args) => execFileSync('ffprobe', args, { encoding: 'utf8' }).trim();
const songLength = Number(
  ffprobe(['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', SONG])
);

// Sorted by name, which is date order, so the film runs March to September.
const clips = PICKS.map((i) => index[i]).filter(Boolean).sort();
const segment = songLength / clips.length;

console.log(`${clips.length} clips · ${segment.toFixed(2)}s each · ${songLength.toFixed(2)}s of song`);

rmSync(TMP, { recursive: true, force: true });
mkdirSync(TMP, { recursive: true });
mkdirSync(OUT, { recursive: true });

const parts = [];
clips.forEach((stem, n) => {
  const source = meta[stem];
  if (!source) return;
  // Take from the middle: the start of a phone clip is usually the moment
  // somebody was still raising the camera.
  const start = Math.max(0, source.dur / 2 - segment / 2);
  // Displayed orientation, which is not the stored one for 69 of these clips.
  const portrait = (source.dh ?? source.h) > (source.dw ?? source.w);
  const part = join(TMP, `${String(n).padStart(3, '0')}.mp4`);

  execFileSync('ffmpeg', [
    '-v', 'error', '-ss', String(start), '-t', String(segment), '-i', source.file,
    // Portrait clips fill the frame exactly — same shape, nothing cropped. The
    // six landscape ones would lose two thirds of their width to a 9:16 crop,
    // so those alone are fitted whole against a blurred blow-up of themselves.
    ...(portrait
      ? ['-vf', `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},fps=${FPS},setsar=1`]
      : ['-filter_complex',
         `[0:v]scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},gblur=sigma=26[bg];` +
           `[0:v]scale=${W}:${H}:force_original_aspect_ratio=decrease[fg];` +
           `[bg][fg]overlay=(W-w)/2:(H-h)/2,fps=${FPS},setsar=1[v]`,
         '-map', '[v]']),
    // Near-lossless: these are thrown away after the concat, and every bit of
    // quality lost here is lost again in the final encode.
    '-an', '-c:v', 'libx264', '-preset', 'medium', '-crf', '14', '-pix_fmt', 'yuv420p',
    part, '-y',
  ]);
  parts.push(part);
  process.stdout.write(`\r  cut ${parts.length}/${clips.length}`);
});
console.log();

writeFileSync(join(TMP, 'list.txt'), parts.map((p) => `file '${p.replace(TMP + '/', '')}'`).join('\n'));

const film = join(OUT, 'run-baby-run.mp4');
execFileSync('ffmpeg', [
  '-v', 'error', '-f', 'concat', '-safe', '0', '-i', join(TMP, 'list.txt'), '-i', SONG,
  '-map', '0:v', '-map', '1:a',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '128k',
  // Ends with the song, in case rounding leaves a frame over.
  '-shortest', '-movflags', '+faststart',
  film, '-y',
]);

// A poster, so the player is never an empty black box before it is pressed.
execFileSync('ffmpeg', [
  '-v', 'error', '-ss', '3.5', '-i', film, '-frames:v', '1',
  join(OUT, 'run-baby-run.jpg'), '-y',
]);

const size = (f) => (readFileSync(f).length / 1e6).toFixed(1);
const length = ffprobe(['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', film]);
console.log(`\n${film} — ${Number(length).toFixed(2)}s, ${size(film)} MB`);
console.log(`${join(OUT, 'run-baby-run.jpg')} — ${size(join(OUT, 'run-baby-run.jpg'))} MB`);
rmSync(TMP, { recursive: true, force: true });
