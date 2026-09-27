/**
 * The bits of the refresh that must be importable without launching a browser:
 * the hand-verified corrections, and the function that applies them.
 * scripts/refresh-stats.mjs documents why each one exists.
 */
export const ARTEFACTS = {
  // 19:01 is a GPS artefact; 27:44 is the real best, confirmed with Mahty.
  Mahty: { replace: { '5K': '27:44' } },
  // A 3:58 mile and a 9:24 two mile, both quicker than his 5K pace of 6:20
  // a mile. Dropped rather than shown.
  Georgii: { drop: ['1 mile', '2 mile'] },
  // Strava began reporting a 40:12 10K, which would have put him top of the
  // club board. His own page disagrees: his most recent 10.02 km is 59m 04s
  // at 5:53/km, his achievements that week are segment PRs rather than a 10K
  // best effort, and 40:12 is quicker per kilometre than his 21:13 5K.
  // 56:06 is the last figure anyone verified.
  Ashot: { replace: { '10K': '56:06' } },
};

export function deArtefact(member, bests) {
  const rule = ARTEFACTS[member];
  if (!rule) return bests;
  let out = bests;
  if (rule.drop) out = out.filter((b) => !rule.drop.includes(b.label));
  if (rule.replace) out = out.map((b) => (rule.replace[b.label] ? { ...b, time: rule.replace[b.label] } : b));
  return out;
}
