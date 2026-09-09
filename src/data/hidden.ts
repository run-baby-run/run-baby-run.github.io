/**
 * Photographs kept out of the diary.
 *
 * The screening in scripts/screen-photos.mjs catches schedules, posters and
 * stickers by measuring how much of an image is one flat colour. A few slip
 * through — usually event cards with a photographic texture behind them. This
 * is the manual list for those.
 *
 * They stay in the gallery, and the files stay on disk; they are simply not
 * pulled into a diary entry.
 */
export const hiddenFromDiary = new Set<string>([
  '2026-03-05-01', // the Run and Brunch #15 event card
]);
