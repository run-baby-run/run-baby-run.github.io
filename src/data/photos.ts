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
