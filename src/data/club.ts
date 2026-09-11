/**
 * Figures about the club itself, as opposed to its runs.
 *
 * `members` is read off the WhatsApp group, because it cannot be derived.
 * Counting the export's own join and leave messages gives 452 people joining
 * and 26 leaving, which implies 440 — a hundred more than are actually there.
 * WhatsApp does not record every departure, so the arithmetic drifts upwards
 * and the only honest source is the number at the top of the group.
 *
 * (An earlier version of this counted 556 joins and 13 leaves, which was worse
 * still: every person generates both a "was added" and a "joined using a group
 * link" line, so they were counted twice, and the fourteen "removed" lines were
 * not counted at all.)
 *
 * Read on 11 September 2026. Update it by looking.
 */
export const members = 350;

/** For scale. The club's summed distance is most of the way around one. */
export const EARTH_CIRCUMFERENCE_KM = 40_075;
/** And its summed climbing is a good many of these, from sea level. */
export const EVEREST_M = 8_849;
