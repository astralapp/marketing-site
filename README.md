# Astral marketing site

The marketing site for [Astral](https://astralapp.com) — organize your GitHub stars with tags,
smart filters, notes, and instant search.

Built with **Astro 6** + **Tailwind CSS v4**, statically generated, dark-only. Design language is
documented in [`DESIGN.md`](./DESIGN.md) and product positioning in [`PRODUCT.md`](./PRODUCT.md)
(both maintained with [Impeccable](https://github.com/pbakaus/impeccable)).

## Commands

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `pnpm install`  | Install dependencies                         |
| `pnpm dev`      | Dev server at `localhost:4321`               |
| `pnpm build`    | Build the static site to `./dist/`           |
| `pnpm preview`  | Preview the production build locally         |

Requires Node 22 (see `.nvmrc`) and pnpm.

## Deployment — Cloudflare Pages

Static output, no adapter needed.

- **Build command:** `pnpm run build`
- **Output directory:** `dist`
- **Node version:** 22 (set `NODE_VERSION=22` or rely on `.nvmrc`)

Point the apex `astralapp.com` at the Pages project. The app itself lives at
`app.astralapp.com` (separate).

## Regenerating assets

Two one-off scripts (need a local Chrome and `puppeteer-core`):

- `node scripts/make-og.mjs` — regenerates `public/og-image.png` (1200×630 social card).
- `node scripts/capture-shot.mjs` — recaptures the hero dashboard screenshot from a locally
  running Astral app via its `/dev-login` route. Swap in a dark-mode capture from a populated
  account for the most cohesive hero.

## Note on legal pages

`src/pages/privacy.astro` and `src/pages/terms.astro` ship with honest starter content derived from
how the app actually works. Have them reviewed before treating them as authoritative.
