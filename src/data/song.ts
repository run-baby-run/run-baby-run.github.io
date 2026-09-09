export const song = {
  title: 'Just Show Up',
  note: 'The club song. Written for Run Baby Run, made with Suno — four takes of it.',
};

export interface Track {
  /** What the take is, beyond its number. */
  label: string;
  file: string;
  /** As a fallback until the browser reads the real duration. */
  duration: string;
}

/** Four builds of the same song. Same words, different arrangements. */
export const tracks: Track[] = [
  { label: 'Full take', file: '/audio/just-show-up-1.mp3', duration: '3:50' },
  { label: 'Second build', file: '/audio/just-show-up-2.mp3', duration: '3:42' },
  { label: 'Short cut', file: '/audio/just-show-up-3.mp3', duration: '1:00' },
  { label: 'Short cut, take two', file: '/audio/just-show-up-4.mp3', duration: '1:00' },
];

/** Blank lines separate stanzas. */
export const lyrics = [
  ['Ten o’clock, the city’s still warm', 'Somebody’s stretching under a streetlight'],
  [
    'Tuesday night and the map just dropped',
    'A corner, a crossing, a place we all stop',
    'I don’t know your name and you don’t know mine',
    'We’re strangers till the second kilometre line',
    'Nobody asked me how fast I could go',
    'They just said the pace is whatever you know',
  ],
  ['Front group, back group, same start line', 'Nobody’s left out here on their own tonight'],
  [
    'Just show up — we’ll take it from there',
    'Yerevan, the whole road, the cold night air',
    'Four-thirty or eight, we don’t care',
    'Just show up, baby, we’ll take it from there',
    'Run, baby, run',
  ],
  [
    'Quarter to eight and the light comes in gold',
    'Before work, before excuses get told',
    'Saturday, six-thirty, still dark on the hill',
    'The long one, the big one, the one that we feel',
    'And somebody’s dog gets the whole thing on tape',
    'And somebody shouts “photo!” and nobody escapes',
  ],
  [
    'It started with three and a standing Tuesday night',
    'Shaghig, Asdghig, Jebid under the light',
    'Now there’s more of us than the corner can hold',
    'Same idea, just louder, just bold',
    'No fee, no forms, no roster, no test',
    'Only the road, and the coffee after that’s best',
  ],
  [
    'You don’t have to be ready',
    'You don’t have to be fast',
    'You just have to be there',
    'When we go past',
  ],
  ['Coffee’s on the corner', 'Same time next week'],
];
