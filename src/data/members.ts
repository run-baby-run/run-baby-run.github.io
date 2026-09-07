import type { ImageMetadata } from 'astro';

export interface Member {
  name: string;
  /** Filename in src/assets/members/ */
  file: string;
}

export interface ResolvedMember extends Member {
  image: ImageMetadata;
}

const entries: Member[] = [
  { name: 'Akshy', file: 'akshy.jpg' },
  { name: 'Aram', file: 'aram.jpg' },
  { name: 'Arman', file: 'arman.jpg' },
  { name: 'Ashot', file: 'ashot.jpg' },
  { name: 'Avak', file: 'avak.jpg' },
  { name: 'Hayk', file: 'hayk.jpg' },
  { name: 'Hrag', file: 'hrag.jpg' },
  { name: 'Inga', file: 'inga.jpg' },
  { name: 'Korosh', file: 'korosh.jpg' },
  { name: 'Mahty', file: 'mahty.jpg' },
  { name: 'Mariam', file: 'mariam.jpg' },
  { name: 'Mehrdad', file: 'mehrdad.jpg' },
  { name: 'Moojan', file: 'moojan.jpg' },
  { name: 'Pavel', file: 'pavel.jpg' },
  { name: 'Pouria', file: 'pouria.jpg' },
  { name: 'Sabrina', file: 'sabrina.jpg' },
  { name: 'Sergey', file: 'sergey.jpg' },
  { name: 'Shaghig', file: 'shaghig.jpg' },
  { name: 'Soheil', file: 'soheil.jpg' },
  { name: 'Subhav', file: 'subhav.jpg' },
  { name: 'Tagouhi', file: 'tagouhi.jpg' },
  { name: 'Yeva', file: 'yeva.jpg' },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/members/*.jpg', {
  eager: true,
});

export const members: ResolvedMember[] = entries.map((member) => {
  const entry = files[`../assets/members/${member.file}`];
  if (!entry) throw new Error(`Member photo missing: src/assets/members/${member.file}`);
  return { ...member, image: entry.default };
});
