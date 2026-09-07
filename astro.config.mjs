// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain runbabyrun.fun (see public/CNAME) at the
// domain root, so no `base` is needed here.
export default defineConfig({
  site: 'https://runbabyrun.fun',
  integrations: [sitemap()],
});
