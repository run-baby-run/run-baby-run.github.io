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
 * Square, and 720 because of what the footage actually is.
 *
 * Two things had to be learned the hard way. First, ffprobe's width and height
 * are the CODED size and ignore rotation metadata: 69 of these clips are stored
 * landscape and played portrait, so an early count of "139 landscape" was
 * simply wrong. On screen it is 175 portrait to 66 landscape — it is phone
 * footage, and 16:9 was never the right shape for it.
 *
 * Second, a 1280x720 canvas upscaled 47 of 49 clips, median 1.5x, and the film
 * looked soft; fitting them inside it instead left a small picture in a sea of
 * blur. Square crops both orientations gently — a 576x1024 clip keeps its full
 * width — and 720 keeps the upscale to 1.25x on the commonest source.
 */
const W = 720, H = 720, FPS = 30;

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
  const part = join(TMP, `${String(n).padStart(3, '0')}.mp4`);

  execFileSync('ffmpeg', [
    '-v', 'error', '-ss', String(start), '-t', String(segment), '-i', source.file,
    // Fill the square and centre-crop. A portrait clip keeps its whole width
    // and loses only top and bottom, which is where phone footage has least;
    // a landscape one loses its edges. No blurred fill, no bars.
    '-vf', `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},fps=${FPS},setsar=1`,
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
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-pix_fmt', 'yuv420p',
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
