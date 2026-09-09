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
  '2026-03-10-01', // the empty entrance — the meeting place, with nobody in it
  '2026-03-10-02', // someone walking into the frame in front of the group
  '2026-03-10-03', // the same group photo as -04, which has more of us in it
  '2026-03-10-07', // the same moment at the crossing as -08
  '2026-04-02-02', // the same café shot as -03
  '2026-04-02-05', // the same shot under the umbrella as -04

  // Posters, screenshots and adverts the automatic screen let through
  '2026-03-21-02', // Founders Running Club 5K poster
  '2026-03-28-04', // the same poster again
  '2026-05-01-01', // a map of Vardavar lake
  '2026-05-09-03', // an instructions card about toilets and bag drop
  '2026-05-09-04', // a story frame: "just come to race start point"
  '2026-05-10-10', // a Strava route map
  '2026-06-30-01', // the race-kit collection notice
  '2026-07-04-01', // the race-morning timetable
  '2026-07-09-01', // an Ambassador Applications advert
  '2026-07-16-04', // a concert poster
  '2026-08-24-01', // Tricolor Gyumri Run, one month to go
  '2026-08-24-02', // the Gyumri programme

  // The same moment, twice
  '2026-04-04-02', // as -01
  '2026-04-16-05', // as -04
  '2026-05-10-05', // as -04
  '2026-05-10-09', // as -08
  '2026-06-25-03', // the third photograph of the same box of brownies
  '2026-06-25-04', // and the fourth
  '2026-06-25-06', // as -05
  '2026-07-05-04', // as -03

  // Nothing to do with the run
  '2026-04-15-01', // a cat
  '2026-06-10-01', // a cat on some rocks
  '2026-06-10-02', // a blurred dog
  '2026-06-10-03', // two more dogs
  '2026-07-18-02', // graffiti
  '2026-07-18-03', // more graffiti
  '2026-08-01-04', // a close-up of a pole
  '2026-08-01-09', // something broken on the ground
  '2026-08-07-02', // leaves
  '2026-08-07-03', // more leaves
  '2026-08-13-03', // a doorway
  '2026-06-30-02', // an empty escalator hall

  // One member posts his own training from India — a 121-day challenge of a
  // half marathon a day — into the group. Good luck to him, but none of it
  // happened on one of our runs.
  '2026-06-27-03', // geese at a lake, not ours
  '2026-06-27-04', // the same lake
  '2026-09-01-01', // Day 01/121
  '2026-09-03-04', // Day 03/121
  '2026-09-04-01', // Day 04/121
  '2026-09-08-01', // Day 08/121
]);
