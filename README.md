# Run Baby Run Club

Website for [Run Baby Run](https://www.instagram.com/run.baby.run.club/), a free running
club in Yerevan, Armenia. Built with [Astro](https://astro.build) and deployed to
GitHub Pages, served at <https://runbabyrun.fun>.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Checking phone layouts

Headless Chrome clamps its layout viewport to 500px, so `--window-size` cannot
reproduce a real phone. Use puppeteer-core's device emulation (`setViewport`
with `isMobile: true`) when checking anything below that width.

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

The site is served from **runbabyrun.fun**. The domain lives in `public/CNAME`, which
Astro copies into `dist/` on every build — GitHub Pages needs that file present or it
drops the custom domain. If the domain ever changes, update `public/CNAME` and `site`
in `astro.config.mjs` together.

DNS (at the registrar) should point the apex at all four GitHub Pages addresses:
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, with
`www` as a CNAME to `run-baby-run.github.io.`
