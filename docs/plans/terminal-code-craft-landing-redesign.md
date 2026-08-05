# Terminal / Code-Craft Redesign — Landing Page & About Section

## Context

Mentor review (`docs/feedback/mentor-feedback-2026-08-04.md`) flagged the live site as reading "vibe coded" — specifically the boxed/pill eyebrow label above every section heading, plus generic Poppins typography throughout. The agreed fix, discussed and logged in that file, is a "Terminal / Code-Craft" direction: Space Grotesk (headings) + Inter (body) + JetBrains Mono (labels/tags), code-comment-style section eyebrows (`# about-me`) instead of pills, and flat underlined monospace tag lists instead of rounded-pill chips — all while keeping the existing navy/teal brand colors untouched. A second mentor action item calls for rewriting project descriptions to lead with outcomes/impact rather than description.

This plan implements both across the landing page (`/`) — Navbar, Hero, About, Skills, FeaturedProjects, Footer — which is where all the flagged elements live. Portfolio/Resume/Contact/Certifications use the same shared `.section__label`/`.tag` classes but are **out of scope for this pass** (confirmed with user): those pages will still pick up the new fonts (safe, site-wide) but keep their current pill-shaped eyebrows/tags until a follow-up pass gives them the same treatment with matching markup changes.

Confirmed decisions:

- New classes (`.section__eyebrow`, `.tag-list`/`.tag-list__item`) are added alongside the existing `.section__label`/`.tag` rather than redefining them in place, so other pages don't end up half-converted (icon + underline hybrid).
- Tech icons are dropped everywhere in the tag-list conversion (Hero strip, Skills cards, FeaturedProjects tech tags) — flat text only, matching the mentor's own reference (`flutter · node.js · claude-api`).
- The Hero tech strip's staggered pop/bounce chip animation is removed entirely (it inherits the parent's existing fade-right reveal instead); hover becomes a simple color/underline transition.
- FeaturedProjects gets impact-led description rewrites for its 3 cards (Houzi, NebuFit, Creative OS), sourced from `docs/projects-description/projects-description-2021-2026.md`.

## Progress

### 1. `src/styles/global.css`

- [x] Replace the Poppins `@import` (line 1) with a three-family Google Fonts import: Space Grotesk (500/600/700), Inter (400/500/600/700 + italic 400), JetBrains Mono (400/500/600/700).
- [x] Add font tokens to `:root`: `--font-display: "Space Grotesk", sans-serif;`, `--font-body: "Inter", sans-serif;`, `--font-mono: "JetBrains Mono", monospace;`.
- [x] `body` (line 29) and `.btn` (line 100): swap hardcoded `"Poppins", sans-serif` → `var(--font-body)`.
- [x] Add a global heading rule: `h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); }` — this covers `.hero__name`, `.section__heading`, `.skill-card__header h3`, `.project-card__name` automatically since they're real heading elements. This is the one change that intentionally cascades to all pages (safe — pure type swap, no layout impact).
- [x] Add new shared classes without touching `.section__label`/`.tag`/`.tag__icon`:
  - [x] `.section__eyebrow` — mono font, hash-prefixed text (e.g. `# about-me`) supplied literally in markup (not `::before`, so it reads correctly in view-source/screen readers), accent-dark color, no background/border.
  - [x] `.tag-list` (flex, wrap, mono font) + `.tag-list__item` (underlined text, `·` separator via `::after` on each item so it travels with the word on line-wrap, hover shifts color to accent-dark).

### 2. `src/components/Hero/index.astro` + `Hero.css`

- [x] `<p class="hero__eyebrow">Hello, I'm</p>` → `<p class="section__eyebrow hero__eyebrow"># whoami</p>`; trim `Hero.css`'s `.hero__eyebrow` down to just the color/margin override it still needs (mono/size/weight/uppercase now come from `.section__eyebrow`).
- [x] Replace the `.hero__tech` `<div>` of 8 `<span>` (each wrapping an `<img>` icon) with a `<ul class="hero__tech tag-list">` of 8 plain `<li class="tag-list__item">` text items — no icons.
- [x] Delete from `Hero.css`: the `.hero__tech span` pill block (background/border/box-shadow/border-radius), `.hero__tech-icon`/`.hero__tech span img` rules, the `.hero__content.aos-animate .hero__tech span` stagger rule + all 8 `nth-child` delay rules + the `@keyframes hero-chip-pop` block, and the now-dangling `@media (prefers-reduced-motion: reduce)` selectors that reference the deleted `.hero__tech span`/`img`.
- [x] Add a dark-background override scoped under `.hero__tech` (required, not optional — `.tag-list__item`'s default `var(--text-light)` gray is near-invisible on the navy hero background): light-on-dark text color, dimmed white underline, accent-color on hover, dimmed white `·` separators.

### 3. `src/components/About/index.astro` + `About.css`

- [x] `<p class="section__label">About Me</p>` → `<p class="section__eyebrow"># about-me</p>`.
- [x] Delete the now-redundant `.about__bio .section__label { color: var(--accent-dark); }` override in `About.css` (that's already `.section__eyebrow`'s default color).
- [x] Add `font-family: var(--font-display)` to `.stat__number` and `var(--font-mono)` to `.stat__label` (these are `<span>`s, won't inherit the new global `h1`-`h6` rule).
- [x] No change to bio copy, stats card background/radius, or the dead unused `.about__link--linkedin` pill class.

### 4. `src/components/Skills/index.astro` + `Skills.css`

- [x] `<p class="section__label">Technical Skills</p>` → `<p class="section__eyebrow"># tech-stack</p>`.
- [x] Remove the `techIcons` import (no longer used in this file).
- [x] Replace each `<div class="skill-card__tags">` of `<span class="tag">` (icon + text) with a `<ul class="skill-card__tags tag-list">` of `<li class="tag-list__item">{s}</li>` — no icons.
- [x] In `Skills.css`, delete the `.skill-card__tags .tag` background override (no longer applicable) and trim `.skill-card__tags` to only card-specific spacing, since `.tag-list` now owns the flex/wrap layout.

### 5. `src/components/FeaturedProjects/index.astro` + `FeaturedProjects.css`

- [x] `<p class="section__label">Featured Work</p>` → `<p class="section__eyebrow"># selected-work</p>` (matches the mentor's own verbatim example and the existing "Selected Projects" heading).
- [x] Remove the `techIcons` import.
- [x] Replace each `<div class="project-card__tech">` of `<span class="tag">` with a `<ul class="project-card__tech tag-list">` of `<li class="tag-list__item">` — no icons.
- [x] Keep `.project-card__badge` as its own distinct class (it's a two-part "stack · source" label, not an enumerable tag collection) — strip its pill styling (background/border/radius → none) and restyle as a plain uppercase mono label, no underline since it isn't interactive.
- [x] Add `font-family: var(--font-mono)` to `.project-card__metric` (already plain text, free consistency).
- [x] Rewrite the three `description` fields to lead with impact, drafted from `docs/projects-description/projects-description-2021-2026.md` (#1 Houzi, #15 NebuFit, #18 Creative OS):
  - [x] **Houzi**: leads with turning a slow custom-per-client build into a white-label template any Houzez site can launch fast/cheap — 53,000+ sites, one Flutter codebase, companion desktop/plugin tools.
  - [x] **NebuFit**: leads with replacing the need for a human trainer via an always-on AI coach — the multi-provider LLM backbone (Claude + GPT-4o + ElevenLabs) with failover/SSE streaming that makes it reliable at scale.
  - [x] **Creative OS**: leads with giving creators a genuine local-first AI "operating system" for their work — the RAG/MCP architecture that makes it context-aware and extensible.
  - [x] `badge`, `metric`, and `tech` fields stay as-is.

### 6. `src/components/Footer/Footer.css` (no markup change)

- [x] Add `font-family: var(--font-mono)` to `.footer__tagline`, `.footer__col-heading`, `.footer__location-label` — the tagline already reads `Flutter · Node.js · Claude API · RAG · n8n` as plain interpunct-separated text, so it's purely a type swap, no restructuring.

### 7. `src/components/Navbar/Navbar.css` (no markup change)

- [x] Add `font-family: var(--font-display)` to the logo link (`.navbar .logo a`) so the brand mark matches `.hero__name`/`.section__heading` — it's not a real heading element so won't inherit the new global `h1`-`h6` rule. Nav links stay on inherited `--font-body` (Inter) as UI chrome.

### Verification

- [ ] `npm run dev`, visit `/`.
- [ ] Network tab: confirm Space Grotesk / Inter / JetBrains Mono all load (200, not 404 from a typo'd family name) and Poppins is no longer requested.
- [ ] Hero (dark bg): `# whoami` reads correctly in mono; the 8-item tech list wraps cleanly with no orphaned `·` at line starts; text/underline is clearly legible against the navy background at both desktop and the `<750px` centered breakpoint.
- [ ] About: `# about-me` eyebrow matches Skills/FeaturedProjects eyebrow styling; stats numbers now Space Grotesk, stat labels now mono; bio paragraphs unaffected (Inter via body).
- [ ] Skills (light bg): check the 7-tag cards (Mobile & Frontend, Backend & APIs, AI & LLM, Automation, Payments & Integrations) wrap as flowing text with no leftover icon-gutter whitespace.
- [ ] FeaturedProjects (light bg): NebuFit's 9-tag list is the worst-case wrap test; `.project-card__badge` renders as a flat mono label (no pill remnants); the three rewritten descriptions fit the card layout without unbalancing the 3-column grid's row heights.
- [ ] Footer: tagline/column headings/location labels now mono, no layout shift (markup untouched).
- [ ] Cross-check `/portfolio`, `/resume`, `/contact`, `/certifications`: confirm they render in the new fonts but their eyebrow/tag *shape* is visually unchanged (still `.section__label`/`.tag` pills) — expected, intentional partial cascade, not a bug.
- [ ] Confirm no dangling `@media (prefers-reduced-motion: reduce)` block references the deleted `.hero__tech span`/`img` selectors after cleanup.
