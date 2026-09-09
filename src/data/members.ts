import type { ImageMetadata } from 'astro';

export interface Member {
  name: string;
  /** Filename in src/assets/members/ */
  file: string;
  /** Strava athlete id, if they have shared one. */
  strava?: string;
}

export interface ResolvedMember extends Member {
  image: ImageMetadata;
}

const entries: Member[] = [
  { name: 'Akshy', file: 'akshy.jpg', strava: '199874896' },
  { name: 'Aram', file: 'aram.jpg', strava: '169364936' },
  { name: 'Arman', file: 'arman.jpg', strava: '1921973238' },
  { name: 'Ashot', file: 'ashot.jpg', strava: '776905918' },
  { name: 'Avak', file: 'avak.jpg', strava: '351549088' },
  { name: 'Georgii', file: 'georgii.jpg', strava: '138012348' },
  { name: 'Hayk', file: 'hayk.jpg', strava: '2024080023' },
  { name: 'Hrag', file: 'hrag.jpg', strava: '156345876' },
  { name: 'Inga', file: 'inga.jpg', strava: '176521483' },
  { name: 'Korosh', file: 'korosh.jpg' },
  { name: 'Mahty', file: 'mahty.jpg', strava: '163347544' },
  { name: 'Mariam', file: 'mariam.jpg', strava: '1801588450' },
  { name: 'Mehrdad', file: 'mehrdad.jpg', strava: '86215045' },
  { name: 'Michael', file: 'micheal.jpg', strava: '176527460' },
  { name: 'Mohsen', file: 'mohsen.jpg', strava: '193676470' },
  { name: 'Moojan', file: 'moojan.jpg', strava: '1365038761' },
  { name: 'Narek', file: 'narek.jpg', strava: '105166281' },
  { name: 'Pavel', file: 'pavel.jpg' },
  { name: 'Pouria', file: 'pouria.jpg', strava: '94867862' },
  { name: 'Sabrina', file: 'sabrina.jpg', strava: '1458729903' },
  { name: 'Sergey', file: 'sergey.jpg' },
  { name: 'Sevag', file: 'sevag.jpg', strava: '203841915' },
  { name: 'Sha', file: 'shaghig.jpg', strava: '970062365' },
  { name: 'Soheil', file: 'soheil.jpg', strava: '1604216481' },
  { name: 'Subhav', file: 'subhav.jpg', strava: '203339007' },
  { name: 'Tagouhi', file: 'tagouhi.jpg', strava: '142928973' },
  { name: 'Yeva', file: 'yeva.jpg', strava: '1587411643' },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/members/*.jpg', {
  eager: true,
});

export const members: ResolvedMember[] = entries.map((member) => {
  const entry = files[`../assets/members/${member.file}`];
  if (!entry) throw new Error(`Member photo missing: src/assets/members/${member.file}`);
  return { ...member, image: entry.default };
});
