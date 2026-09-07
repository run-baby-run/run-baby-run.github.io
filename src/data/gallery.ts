import type { ImageMetadata } from 'astro';

/**
 * Captions for the gallery. `file` matches a filename in src/assets/gallery/;
 * the page resolves the actual image through import.meta.glob so Astro can
 * optimise it at build time.
 */
export interface Shot {
  file: string;
  alt: string;
  caption: string;
}

export interface ResolvedShot extends Shot {
  image: ImageMetadata;
  /** Portrait shots get a taller frame in the grid. */
  tall: boolean;
}

const entries: Shot[] = [
  {
    file: 'run-01.jpg',
    alt: 'The club gathered together under a lit arcade after an evening run',
    caption: 'Regrouping under the lights',
  },
  {
    file: 'run-02.jpg',
    alt: 'Runners lined up across a closed street at the start of a session',
    caption: 'Lined up on the start',
  },
  {
    file: 'run-03.jpg',
    alt: 'A large group posing on a floodlit plaza after a night run',
    caption: 'After the night run',
  },
  {
    file: 'run-04.jpg',
    alt: 'The group posing outside an ivy-covered stone building in Yerevan',
    caption: 'The whole crew',
  },
  {
    file: 'run-05.jpg',
    alt: 'Runners sitting along the wall of an ivy-covered building after a morning run',
    caption: 'Morning, done',
  },
  {
    file: 'run-06.jpg',
    alt: 'The group on the lit steps of a city square at night',
    caption: 'Steps and city lights',
  },
  {
    file: 'run-07.jpg',
    alt: 'A group photo at night with the Yerevan skyline behind',
    caption: 'Skyline behind us',
  },
  {
    file: 'run-08.jpg',
    alt: 'A big weekend group, with two dogs, outside a stone building',
    caption: 'Dogs came too',
  },
  {
    file: 'run-09.jpg',
    alt: 'Group photo on a park road under an early morning sky',
    caption: 'Early start',
  },
  {
    file: 'run-10.jpg',
    alt: 'Runners on a purple-lit plaza after a night run',
    caption: 'Purple hour',
  },
  {
    file: 'run-11.jpg',
    alt: 'A selfie taken with the group after a run in a city park',
    caption: 'Someone always has a phone',
  },
  {
    file: 'run-12.jpg',
    alt: 'The group gathered on a tree-lined square after a morning run',
    caption: 'Trees and tired legs',
  },
  {
    file: 'run-13.jpg',
    alt: 'A small group on a quiet residential street after a morning run',
    caption: 'Small but keen',
  },
  {
    file: 'run-14.jpg',
    alt: 'The club gathered on a wet street under blossoming trees in spring',
    caption: 'Blossom season',
  },
  {
    file: 'run-15.jpg',
    alt: 'A large group posing beside flowering magnolia trees in a city square',
    caption: 'Magnolias and trainers',
  },
  {
    file: 'run-16.jpg',
    alt: 'The club filling a bright mall atrium after a run, with a white dog in front',
    caption: 'Indoor regroup',
  },
  {
    file: 'run-17.jpg',
    alt: 'A big group posing together inside a lit shopping centre atrium',
    caption: 'The whole atrium',
  },
  {
    file: 'run-18.jpg',
    alt: 'Runners gathered outside a small coffee kiosk with a dog',
    caption: 'Coffee stop',
  },
  {
    file: 'run-19.jpg',
    alt: 'A small group on a street, one person leaping into the air, with a dog',
    caption: 'Someone always jumps',
  },
  {
    file: 'run-20.jpg',
    alt: 'The group posing outside a coffee kiosk, a dog lying in front',
    caption: 'Post-run coffee',
  },
  {
    file: 'run-21.jpg',
    alt: 'Runners lined up under the arch of a large concrete bridge',
    caption: 'Under the arch',
  },
  {
    file: 'run-22.jpg',
    alt: 'A group standing along a railing beneath a tall bridge arch',
    caption: 'Bridge day',
  },
  {
    file: 'run-23.jpg',
    alt: 'The club on a tree-lined park path after a run, with a dog',
    caption: 'Park pace',
  },
  {
    file: 'run-24.jpg',
    alt: 'A group photo on a quiet street lined with trees, a dog in front',
    caption: 'Morning laps',
  },
  {
    file: 'run-25.jpg',
    alt: 'Runners in race bibs in front of a night race backdrop',
    caption: 'Race night',
  },
  {
    file: 'run-26.jpg',
    alt: 'A large group in race bibs posing at a night race start',
    caption: 'Bibs on',
  },
  {
    file: 'run-27.jpg',
    alt: 'Three runners posing in a bright corridor after a run',
    caption: 'Cooldown poses',
  },
  {
    file: 'run-28.jpg',
    alt: 'Three runners messing about for the camera in a lit corridor',
    caption: 'Corridor photoshoot',
  },
  {
    file: 'run-29.jpg',
    alt: 'Three runners posing together indoors after a session',
    caption: 'Still going',
  },
  {
    file: 'run-30.jpg',
    alt: 'Three runners lined up for one more photo in a corridor',
    caption: 'Last one, promise',
  },
  {
    file: 'run-31.jpg',
    alt: 'A dense crowd of runners waiting at a race start',
    caption: 'Start line crowd',
  },
  {
    file: 'run-32.jpg',
    alt: 'The group gathered in a courtyard on a cold evening',
    caption: 'Evening meet',
  },
  {
    file: 'run-33.jpg',
    alt: 'Runners posing together indoors in front of a window',
    caption: 'Indoors for once',
  },
  {
    file: 'run-34.jpg',
    alt: 'An evening group photo in a courtyard between apartment blocks',
    caption: 'Cold night, warm group',
  },
  {
    file: 'run-35.jpg',
    alt: 'A runner stretching in a lit city square at night',
    caption: 'Stretching it out',
  },
  {
    file: 'run-36.jpg',
    alt: 'A runner balancing on one leg on a city street at night',
    caption: 'Balance check',
  },
  {
    file: 'run-37.jpg',
    alt: 'A group selfie taken in front of a large window after a run',
    caption: 'Window selfie',
  },
  {
    file: 'run-38.jpg',
    alt: 'Runners crowding into a selfie in front of a window',
    caption: 'Everyone in frame',
  },
  {
    file: 'run-39.jpg',
    alt: 'Another group selfie by the window after a session',
    caption: 'One more selfie',
  },
  {
    file: 'run-40.jpg',
    alt: 'A group photographed in a round gilded mirror',
    caption: 'Mirror check',
  },
  {
    file: 'run-41.jpg',
    alt: 'A selfie of three runners under a clear blue sky',
    caption: 'Blue sky, three of us',
  },
  {
    file: 'run-42.jpg',
    alt: 'A big group on a wet street among evergreen trees',
    caption: 'Winter turnout',
  },
  {
    file: 'run-43.jpg',
    alt: 'A long line of runners posing across a street on a grey day',
    caption: 'Everyone showed up',
  },
];

// Eager glob so Astro has the metadata at build time and can emit optimised files.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.jpg', {
  eager: true,
});

export const shots: ResolvedShot[] = entries.map((shot) => {
  const entry = files[`../assets/gallery/${shot.file}`];
  if (!entry) throw new Error(`Gallery image missing: src/assets/gallery/${shot.file}`);
  const image = entry.default;
  return { ...shot, image, tall: image.height > image.width };
});
