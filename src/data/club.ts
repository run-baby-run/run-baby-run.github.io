/**
 * Figures about the club itself, as opposed to its runs.
 *
 * These come from counting join and leave events across both WhatsApp exports,
 * deduplicated where the two overlap. The exports are gitignored — they are a
 * private chat and 745MB of originals — so unlike the Strava totals these
 * cannot be recomputed at build time and are recorded here by hand.
 *
 * Counted on 10 September 2026, covering 12 February to 9 September.
 */
export const joined = 556;
export const left = 13;

/** For scale. The club has run most of the way around one of these. */
export const EARTH_CIRCUMFERENCE_KM = 40_075;
/** And climbed a good many of these, measured from sea level. */
export const EVEREST_M = 8_849;
