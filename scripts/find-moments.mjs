#!/usr/bin/env node
/**
 * Sifts the day's chatter for the lines with something in them.
 *
 * "On my way", "5 min", "which entrance" is how a run gets organised, and none
 * of it is worth remembering. What is worth remembering usually says something
 * about how the day felt, or marks a first, or thanks somebody. This drops the
 * logistics and prints what is left, day by day, to be read by eye.
 *
 *   node scripts/find-moments.mjs [YYYY-MM]
 */
import { readFileSync } from 'node:fs';

const days = JSON.parse(readFileSync('diary/drafts.json', 'utf8'));
const month = process.argv[2];

/** Pure logistics, however it is phrased. */
const NOISE = [
  /^(ok|okay|yes|yess+|no|sure|thanks?|thank you|\+1|same|me too|haha|lol)?[\s!.\p{Emoji_Presentation}\p{Extended_Pictographic}]*$/iu,
  /^(i'?m )?(on my way|coming|omw|here|almost there|be there|leaving now)/i,
  /(what time|which entrance|where (are|exactly)|is it (today|tomorrow)|can i be late|i'?ll be late|sorry.{0,20}(can'?t|cannot) (make|join|come))/i,
  /^POLL:/,
  /^https?:\S+$/,
  /^(\+?\d[\d\s\-()]{7,})$/,
];

/** Words that tend to sit in a sentence somebody would want to read again. */
const WARM =
  /(first time|first run|so much fun|had fun|amazing|beautiful|proud|thank you so much|welcome|congrat|personal best|\bPB\b|finished|medal|record|birthday|miss(ed)? you|see you all|love|unforgettable|never forget|best (run|day|night)|felt|nervous|scared|made it|we did it|last time|goodbye|leaving armenia|moving)/i;

for (const d of days) {
  if (month && !d.date.startsWith(month)) continue;
  const keep = d.messages.filter((m) => {
    const t = m.text.replace(/\s+/g, ' ').trim();
    if (NOISE.some((r) => r.test(t))) return false;
    return WARM.test(t) || t.split(' ').length >= 12;
  });
  if (!keep.length) continue;
  console.log(`\n=== ${d.date} ${d.weekday} · ${d.media.length} photos · ${d.people} people · +${d.joins}`);
  for (const m of keep) console.log(`  [${m.time}] ${m.sender}: ${m.text.replace(/\s+/g, ' ').slice(0, 300)}`);
}
