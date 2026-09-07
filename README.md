# Run Baby Run Club

Website for [Run Baby Run](https://www.instagram.com/run.baby.run.club/), a free running
club in Yerevan, Armenia. Built with [Astro](https://astro.build) and deployed to
GitHub Pages at <https://runbabyrun.github.io>.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Editing content

Almost everything lives in **`src/data/site.ts`** — the tagline, links, the three weekly
runs and the founders' names. Change it there rather than in the components.

Images are in `public/images/`:

| File | Used for |
| --- | --- |
| `logo.jpg` | Logotype in the nav, hero and social preview |
| `founders-1.jpg`, `founders-2.jpg` | Founders section |

## Deploying

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and
publishes it to GitHub Pages.

One-time setup on the repo: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

### Custom domain

Rename `public/CNAME.example` to `public/CNAME`, put the domain inside it, and point the
domain's DNS at GitHub Pages. Then update `site` in `astro.config.mjs` to match.
