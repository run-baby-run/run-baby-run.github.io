import type { ImageMetadata } from 'astro';

const memberPhotos = import.meta.glob<{ default: ImageMetadata }>('../assets/members/*.jpg', {
  eager: true,
});
const founderPhotos = import.meta.glob<{ default: ImageMetadata }>('../assets/founders/*.jpg', {
  eager: true,
});

/** Photos live in two folders; look-ups should not have to care which. */
export function photoFor(file: string): ImageMetadata | undefined {
  return (
    memberPhotos[`../assets/members/${file}`]?.default ??
    founderPhotos[`../assets/founders/${file}`]?.default
  );
}

/**
 * Photo by person's display name, across members, founders and the run
 * leader. Undefined for anyone who has not sent a photo yet.
 */
export async function photosByName(): Promise<Map<string, ImageMetadata>> {
  const { members } = await import('./members');
  const { founders, leaders } = await import('./site');

  const map = new Map<string, ImageMetadata>();
  for (const person of [...members, ...founders, ...leaders]) {
    const image = photoFor(person.file);
    if (image) map.set(person.name, image);
  }
  return map;
}
