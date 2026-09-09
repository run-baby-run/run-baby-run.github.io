export interface Track {
  /** What the take is, beyond its number. */
  label: string;
  file: string;
  /** As a fallback until the browser reads the real duration. */
  duration: string;
}

export interface Song {
  title: string;
  note: string;
  /** Empty until a song has been recorded — its lyrics still show. */
  tracks: Track[];
  /** One array per stanza. */
  lyrics: string[][];
}

/**
 * The club's songs, each with its takes — builds of the same song, same words,
 * different arrangements.
 *
 * "Build" and "take" are our words, not the visitor's: `label` is what shows on
 * the site, so keep those plain.
 */
export const songs: Song[] = [
  {
    title: 'Just Show Up',
    note: 'The first club song, made with Suno. Four takes of it.',
    tracks: [
      { label: 'First full song', file: '/audio/just-show-up-1.mp3', duration: '3:50' },
      { label: 'Second full song', file: '/audio/just-show-up-2.mp3', duration: '3:42' },
      { label: 'First short version', file: '/audio/just-show-up-3.mp3', duration: '1:00' },
      { label: 'Second short version', file: '/audio/just-show-up-4.mp3', duration: '1:00' },
    ],
    lyrics: [
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
    ],
  },
  {
    title: 'Run Baby Run',
    note: 'The late-night one, for the Tuesday ten o’clock run. Two takes so far.',
    tracks: [
      { label: 'First full song', file: '/audio/run-baby-run-1.mp3', duration: '3:05' },
      { label: 'Second full song', file: '/audio/run-baby-run-2.mp3', duration: '4:48' },
    ],
    lyrics: [
      ['Ten o’clock. Yerevan.', 'Lights on. Watch on.', 'Run.'],
      ['Run baby — run baby —', 'Run baby — run baby —', 'Run baby — run baby —', 'RUN'],
      [
        'Run baby run, run baby run',
        'Under the streetlight, out past the square',
        'Run baby run, run baby run',
        'Nobody’s counting, nobody cares',
        'Run baby run, run baby run',
        'Front of the pack or back of the line',
        'Run baby run, run baby run',
        'Everybody’s finishing fine',
      ],
      [
        'Tuesday, ten, the city’s still awake',
        'Cold on the arms and the pavement shakes',
        'Somebody’s laughing, somebody’s late',
        'Somebody’s stretching against the gate',
        'We don’t ask how far, we don’t ask how fast',
        'We just ask are you coming — that’s the whole class',
      ],
      ['Feet on the stone, breath in the dark', 'One more lap of the park', 'Run — run — run'],
      [
        'Run baby run, run baby run',
        'Past the fountain where the dog gets a drink',
        'Run baby run, run baby run',
        'Legs keep going while you stop and think',
        'Run baby run, run baby run',
        'Hrazdan wind and the bridge lights on',
        'Run baby run, run baby run',
        'Look up once and the hard part’s gone',
      ],
      ['Run baby run…', 'Run baby run…', '(just show up)', 'Run baby run…', '(we’ll take it from there)'],
      [
        'RUN BABY RUN, RUN BABY RUN',
        'RUN BABY RUN, RUN BABY RUN',
        'Coffee at the corner when the work is done',
        'RUN BABY RUN, RUN BABY RUN',
      ],
      ['Same corner. Same time.', 'Run.'],
    ],
  },
];

export interface PlaylistEntry extends Track {
  song: string;
  /** 1-based position within its own song. */
  take: number;
  /** How many takes that song has, for "2 / 4". */
  takes: number;
  /**
   * What a shared link names this take by — the file's own basename, so the
   * link stays readable and stable as long as the file does.
   */
  slug: string;
}

/**
 * Every playable take, in order, each knowing which song it belongs to — so
 * the player can count takes within a song rather than across all of them.
 * Songs without recordings simply contribute nothing.
 */
export const playlist: PlaylistEntry[] = songs.flatMap((s) =>
  s.tracks.map((track, i) => ({
    ...track,
    song: s.title,
    take: i + 1,
    takes: s.tracks.length,
    slug: track.file.replace(/^.*\//, '').replace(/\.mp3$/, ''),
  }))
);
