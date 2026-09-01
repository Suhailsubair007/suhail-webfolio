# suhail-webfolio

Personal portfolio for Suhail Subair — a statically prerendered Nuxt 4 site.

## Quick start

```bash
npm install       # runs `nuxt prepare` via postinstall
npm run dev       # http://localhost:3000
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run generate` | Static prerender to `.output/public` |
| `npm run preview` | Serve the built output |
| `npm run lint` / `lint:fix` | ESLint (flat config, Nuxt-aware) |
| `npm run typecheck` | `vue-tsc` over the whole project |

## Where things live

```
nuxt.config.ts          Rendering, prerender routes, fonts, Tailwind
shared/
  types/portfolio.ts    Domain types (auto-imported)
  content/*.ts          ALL portfolio content — the single source of truth
server/routes/          sitemap.xml (prerendered to a static file)
public/                 Résumé, portrait, OG image, favicons, robots.txt
app/
  assets/css/main.css   Design tokens (@theme) and base layer
  assets/css/motion.css Reveal contract, hover, ambient, reduced-motion
  components/ui/        Primitives: button, icon, eyebrow, heading, chip, card
  components/layout/    Header (scroll spy), footer
  components/sections/  One component per page section
  composables/          useScrollSpy, usePageSeo
  pages/                index.vue and work/[slug].vue
  plugins/reveal.ts     The v-reveal directive
```

`shared/` is readable by both the Vue app and the Nitro server bundle, which is
why content lives there rather than under `app/` — `server/routes/sitemap.xml.ts`
cannot resolve the `~/` app alias.

## Updating content

Everything rendered on the site comes from `shared/content/`. Edit the relevant
file and the UI follows — no component changes needed.

- `profile.ts` — name, headline, tagline, about copy, metrics, contact CTA
- `experience.ts` — roles, bullets, tech
- `work.ts` — products built inside a role
- `projects.ts` — independent products
- `skills.ts`, `credentials.ts`, `site.ts`

`shared/content/index.ts` derives the `/work/[slug]` case studies from
`experience` and `projects`, so the pages, the nav links and the sitemap can
never drift apart. Adding a role or project automatically adds its case study
and its sitemap entry.

> Content accuracy is a hard requirement: every claim on the site must trace
> back to the résumé. Do not add a metric, link or technology that isn't real.

## Design system

Tokens are defined once in `app/assets/css/main.css` under `@theme`, which emits
them as CSS custom properties *and* generates the matching Tailwind utilities.
Components use the semantic layer (`bg-surface-card`, `text-fg-subtle`,
`border-border`, `text-accent`) rather than raw palette values.

Type is fully fluid via `clamp()`. The root font size stays at the browser
default of 16px.

## Motion

No animation library. Scroll reveal is one shared `IntersectionObserver` behind
the `v-reveal` directive; everything else is CSS transitions and keyframes on
`opacity` / `transform` / `stroke-dashoffset`.

Reduced motion is handled in three independent ways, so content can never be
left invisible:

1. The hidden state is gated behind `@media (scripting: enabled) and
   (prefers-reduced-motion: no-preference)` — no JS or reduced motion means
   never hidden.
2. A 3s failsafe in the plugin reveals anything still hidden.
3. A `prefers-reduced-motion: reduce` block forces `opacity: 1`.

## Deployment

Static output. Vercel picks the settings up from `vercel.json`:

| Setting | Value |
| --- | --- |
| Root Directory | *(repository root)* |
| Framework | `nuxtjs` |
| Build Command | `npm run generate` |
| Install Command | `npm ci` |
| Output | `.output/public` (auto-detected) |
| Node | 24.x |
| Env | `NUXT_PUBLIC_SITE_URL` |

`nitro.preset` is deliberately **not** pinned — Vercel selects `vercel-static`
on its own, and pinning a preset breaks the local `nuxt generate`.

Security and cache headers live in `vercel.json`. Under a static preset there is
no server, so Nuxt's `routeRules.headers` would never be applied.

### Note for the Vercel project

This repository previously hosted a Next.js app at the root. If the existing
Vercel project still has a Framework Preset of **Next.js** pinned in its
dashboard settings, that overrides `vercel.json` and the build will fail. Set it
to **Nuxt.js** (or "Other") before the first deploy from this branch.

## History

Version 1 of this portfolio was a Next.js application. It was replaced wholesale
rather than migrated; its source remains in git history and on the `main` branch.
