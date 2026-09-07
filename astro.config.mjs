// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site: https://run-baby-run.github.io is served at the domain
// root, so no `base` is needed here.
export default defineConfig({
  site: 'https://run-baby-run.github.io',
  integrations: [sitemap()],
});
