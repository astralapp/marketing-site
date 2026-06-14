# Design

Visual system for the Astral marketing site. Single theme: **dark only**. The site is
the calm marketing cousin of the Astral app — it preserves the app's committed identity
(Signal Green, Inter + Orbitron, dark surfaces, tight corners) and adapts it for one
long, dark, observatory-toned landing page.

> **Identity preservation note:** Inter and Orbitron are the product's already-shipping
> brand fonts, and Signal Green is its committed brand color. These are deliberate
> identity choices, not greenfield reflex picks — the impeccable reflex-reject font list
> does not apply here.

## North star

**The Star Catalog.** An astronomer's catalog for your GitHub stars. A deep-space dark
canvas, restrained: a real but subtle starfield/constellation backdrop, emerald Signal
Green as the single "cataloged-star" accent, and the Galileo astronaut mascot for warmth.
Distinctive through this identity — never a generic dark dev-tool page, never a sci-fi
theme park.

## Color

**Strategy: Committed-restrained.** A dark observatory canvas where emerald Signal Green
is the _only_ saturated color (the One Green Rule, carried over from the app). Green
marks primary actions, active/hover, key accents, and the glow behind the product
screenshot — nowhere decoratively. Indigo is fenced to tag chips only, if they appear.
No second decorative accent.

### Surfaces (cool near-black ramp)

| Token         | Hex       | Use                                                        |
| ------------- | --------- | ---------------------------------------------------------- |
| `--bg`        | `#030712` | Page canvas (gray-950)                                     |
| `--void`      | `#000000` | Deepest backdrop behind the starfield                      |
| `--rail`      | `#101828` | Elevated bands / nav-on-scroll (gray-900)                  |
| `--surface`   | `#1e2939` | Cards, the browser frame, raised panels (gray-800)         |
| `--border`    | `#364153` | Hairline borders/dividers (gray-700), usually at 50–60%    |

### Brand — Signal Green ramp

`50 #ecfdf5 · 100 #d1fae5 · 200 #a7f3d0 · 300 #6ee7b7 · 400 #34d399 · 500 #10b981 · 600 #059669 · 700 #047857 · 800 #065f46 · 900 #064e3b · 950 #022c22`

- **Accent / active / links:** `brand-500 #10b981` (and `brand-400 #34d399` on dark).
- **Glow & washes:** `brand-500` at low alpha (radial glow behind the screenshot, hairline
  highlights). Never as gradient text.
- **Tag indigo (fenced):** `#615fff`, only on tag chips that mirror the app.

### Text on dark (all verified ≥ 4.5:1 on `--bg`)

| Token        | Hex       | Use                                          |
| ------------ | --------- | -------------------------------------------- |
| `--ink`      | `#f9fafb` | Headings, hero (gray-50 / near-white)        |
| `--text`     | `#d1d5dc` | Body copy (gray-300)                         |
| `--muted`    | `#99a1af` | Secondary text, metadata, captions (gray-400)|

Do not drop below `gray-400` for body-sized text on the canvas. Gray text on the green
button uses near-black ink, not white (see Buttons).

## Typography

- **Display — Orbitron 700.** Hero headline and the logo wordmark **only**. Tracking
  `+0.02em`, `text-wrap: balance`. Size ceiling `clamp(...)` max ≈ `4.5rem` so it states,
  not shouts; keep the headline short so the wide geometric face stays legible.
- **UI — Inter 400/500/600/700.** Everything else: section headings (Inter 700), body,
  buttons, labels, nav. Self-hosted via `@fontsource`.
- **Light-on-dark adjustment:** add `0.05–0.1` to line-height; light type reads lighter
  and needs more air.
- **Body measure:** cap prose at 65–75ch. **Scale:** modular, fluid `clamp()` for
  headings, ≥ 1.25 ratio between steps. `text-wrap: pretty` on long paragraphs.

## Spacing, radii, elevation

- **Spacing:** 4px base grid; fluid `clamp()` for section padding so rhythm breathes on
  large viewports. Vary deliberately — generous separations between sections, tight
  groupings within.
- **Radii (tight, from the app):** chips `2px`, buttons/controls `6px`, inputs `8px`,
  cards / browser frame `12px`. Never pill-rounded except true toggles/avatars.
- **Elevation = tone first.** Depth comes from surface-tone steps (`--bg` → `--rail` →
  `--surface`) before shadow. Shadow is for genuine lift only (hover, the floating
  screenshot, dropdowns), never decoration on resting surfaces.
- **z-index:** semantic scale only (base → sticky-nav → backdrop → dialog → toast). No
  magic `999`.

## Motion

- Restrained and intentional. Easing is exponential ease-out
  (`cubic-bezier(0.16, 1, 0.3, 1)`); **no bounce, no elastic.**
- **Earned moments:** a slow drifting starfield, a gentle float on the hero
  screenshot/mascot (the app's `float` keyframes, ~3s), and a soft green glow that breathes.
- **Reveals** enhance already-visible content (staggered, fit to what they reveal) — never
  gate content visibility on a class-triggered transition.
- **`prefers-reduced-motion: reduce` is mandatory** for every animation: starfield holds
  still, float stops, reveals become instant/crossfade.

## Components

- **Primary button:** bright `brand-500 #10b981` fill with **near-black ink**
  (`--bg #030712`), `6px` radius, Inter 600; hover `brand-400 #34d399`; `focus-visible`
  ring `brand-400` at ~50%. The green pops against the dark canvas and stays high-contrast.
  Label: **"Get started — free"** → `https://app.astralapp.com`.
- **Secondary / ghost button:** transparent fill, `--border` hairline, `--ink` label,
  hover `--surface` fill. Used for "Sign in" (→ `/auth`) and "View on GitHub".
- **Nav:** sticky top; transparent over the hero, gains a `--rail` backdrop + hairline on
  scroll. Orbitron wordmark left; links + ghost "Sign in" + primary CTA right; mobile nav
  toggled with minimal vanilla JS.
- **Browser frame:** minimal dark chrome (`--surface`, `12px`) around the app screenshot,
  with a soft `brand-500` radial glow and the starfield behind it. The screenshot is the
  hero's primary imagery.
- **Feature sections:** avoid the uniform icon-heading-text card grid. Prefer alternating
  / asymmetric rows that pair each capability with a real product crop or a small visual.
  Lucide icons, tinted green, used sparingly.
- **Testimonials:** real quotes + avatars, varied emphasis (not endless identical cards).
- **FAQ:** native `<details>`/`<summary>` with hairline dividers — zero JS.
- **Footer:** `--rail` band; wordmark, GitHub / X / contact / sponsor links, copyright.

## Imagery

Brand register demands real imagery — colored blocks where a visual belongs is a bug.

- **Hero:** real dark-mode screenshot of the 3-pane Star Catalog UI, in the browser frame.
- **Galileo mascot:** the waving-astronaut SVG from the app, gently floating, for warmth.
- **Backdrop:** a subtle CSS/SVG starfield + faint constellation lines, reduced-motion aware.
- **Feature crops:** optional close-ups of search ("Gaze through your telescope…"), tag
  chips, and notes.
- **Alt text** is written in the brand voice ("The Astral dashboard: tagged stars beside
  an in-app README"), not "screenshot".

## Project bans (on top of impeccable's absolute bans)

No gradient text · no default glassmorphism · no colored side-stripe accents · no
per-section uppercase tracked eyebrows · no `01/02/03` numbered section scaffolding · no
identical card grids · no hero-metric template · the space theme never tips cartoonish.
