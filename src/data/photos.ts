import type { ImageMetadata } from 'astro';

const memberPhotos = import.meta.glob<{ default: ImageMetadata }>('../assets/members/*.jpg', {
  eager: true,
});
const founderPhotos = import.meta.glob<{ default: ImageMetadata }>('../assets/founders/*.jpg', {
  eager: true,
});

/**
 * The two folders can hold the same filename for different people — the
 * founder Shaghig and the member Sha both use shaghig.jpg — so a look-up must
 * say which set it means. Never fall back from one to the other.
 */
export function memberPhoto(file: string): ImageMetadata | undefined {
  return memberPhotos[`../assets/members/${file}`]?.default;
}

export function founderPhoto(file: string): ImageMetadata | undefined {
  return founderPhotos[`../assets/founders/${file}`]?.default;
}

/**
 * Photo by display name, across members, founders and the run leader.
 * Undefined for anyone who has not sent a photo yet.
 */
export async function photosByName(): Promise<Map<string, ImageMetadata>> {
  const { members } = await import('./members');
  const { founders, leaders } = await import('./site');

  const map = new Map<string, ImageMetadata>();
  for (const person of members) {
    const image = memberPhoto(person.file);
    if (image) map.set(person.name, image);
  }
  for (const person of [...founders, ...leaders]) {
    const image = founderPhoto(person.file);
    if (image) map.set(person.name, image);
  }
  return map;
}
