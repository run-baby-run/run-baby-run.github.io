import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The blog: short pieces explaining one idea each, written for someone who has
 * been running for a few weeks and keeps hearing words nobody defines.
 */
const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    /** One line, used on the index and as the meta description. */
    blurb: z.string(),
    /** Reading order on the index — roughly easiest first. */
    order: z.number(),
    /** The single sentence to take away, pulled out at the top of the piece. */
    takeaway: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { posts };
