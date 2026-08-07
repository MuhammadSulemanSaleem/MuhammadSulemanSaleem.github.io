# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Sync rule:** `CLAUDE.md` and `README.md` must always be kept in sync. Whenever you update one, update the other to reflect the same changes.

## Project Overview

Personal portfolio website for Muhammad Suleman Saleem, built with Astro and deployed to GitHub Pages at `MuhammadSulemanSaleem.github.io`. Output is fully static (`output: 'static'`, the Astro default).

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server (localhost:4321, hot reload)
npm run build     # production build → dist/
npm run preview   # preview dist/ locally
```

## Folder Structure

```
src/
  pages/              # Astro file-based routing
    index.astro            → / (hc- design system: HcNav/HcFooter + hc-shared.css + page-specific _index.css)
    _index.css              home-page-specific styles (hero, selected-work tint variants, skills marquee)
    work/
      index.astro          → /work (also hc- design system: HcNav/HcFooter + hc-shared.css + _work.css)
      _work.css              page-specific styles (hero, quick-nav pills, category headers, confidentiality note)
    about/
      index.astro           → /about (Resume content; also hc- design system: HcNav/HcFooter + hc-shared.css + _about.css)
      _about.css              page-specific styles (job/mini-card layout, education, certifications, print rules)
    contact/
      index.astro           → /contact (also hc- design system: HcNav/HcFooter + hc-shared.css + _contact.css)
      _contact.css            page-specific styles (heading+info card, form card, FAQ accordion)
    services/
      index.astro           → /services (also hc- design system: HcNav/HcFooter + hc-shared.css + _services.css)
      _services.css           page-specific styles (full-width hero w/ quick-jump directory, service card grid, FAQ accordion)
    certifications/
      [...slug].astro       → /certifications/<issuer>/<cert-slug> (HTML PDF viewer, legacy design system)
      _certifications.css
  components/
    HcNav/                fixed floating-pill nav for hc- pages (Home, Work, About, Contact) — scroll-hide script, active-link highlighting via Astro.url.pathname
    HcFooter/              black card-style footer for hc- pages (Home, Work, About, Contact) — same column layout/links on all four
    Navbar/                fixed nav, CSS-only hamburger menu — legacy design system (Certifications only)
    Footer/                6-column footer with anchor links + brand description — legacy design system (Certifications only)
  layouts/
    BaseLayout/index.astro  # Root HTML shell — favicon links, imports global.css, CDN links
  styles/
    global.css          # CSS variables (:root), reset, shared utility classes — legacy navy/teal design system
    hc-shared.css        # Shared "hc-" Graflow-style design system: page shell/tokens/fonts, hc-card, hc-btn/hc-icon-btn,
                          # hc-nav, hc-stack (Built With marquee), hc-work (Challenge/Solution/Impact card), hc-cta, hc-footer
public/
  assets/
    gifs/               # animated-code.gif, animated-header.gif
    images/             # profile.png
    favicons/           # favicon.ico, favicon-16x16.png, favicon-32x32.png,
                         # apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
  Muhammad_Suleman_Saleem_Resume.pdf   # no longer linked from /about (hero/download button removed); kept for direct access
  app-ads.txt           # Google AdSense ads.txt
.github/workflows/deploy.yml  # GitHub Actions → builds & deploys to Pages
```

## Architecture

- **Routing**: File-based via Astro. Each page lives in `src/pages/<name>/index.astro`, except Home which lives directly at `src/pages/index.astro`.
- **Two design systems coexist**: Home, Work, Services, About, and Contact use the newer "hc-" Graflow-style system (`src/styles/hc-shared.css` + a page-specific `_<page>.css`, `HcNav`/`HcFooter` components, Sora/Manrope fonts). Certifications still uses the original navy/teal system (`src/styles/global.css`, `Navbar`/`Footer` components, Poppins). This is a known, intentional mid-migration state, not a bug — Home was redesigned first, then Work, About, and Contact, then Services was added net-new directly in the hc- system; Certifications has not been migrated yet.
- **hc- shared design system** (`src/styles/hc-shared.css`): the page shell/tokens (`.hc-page` — `--hc-ink`, `--hc-bg`, `--hc-wash-blue`, `--hc-wash-violet`, `--hc-footer-accent`, ambient corner-wash background), typography (`.hc-eyebrow`, `.hc-heading`), the `.hc-card` surface, buttons (`.hc-btn`, `.hc-btn--primary`, `.hc-btn--outline`, `.hc-icon-btn` with its sliding double-arrow track), `.hc-nav`/`.hc-main`, the `.hc-stack` "Built With" marquee, the `.hc-work` Challenge/Solution/Impact card (two-column: `.hc-work__content` with a `<dl>` breakdown + `.hc-work__tile` tinted mark/name/metric panel, `position: sticky` so successive cards stack while scrolling), the `.hc-cap-*` Engineering Expertise card illustrations (terminal/orbit/flow, one per capability card — shared because both Home and About render an Engineering Expertise section), `.hc-stats`, `.hc-cta` band, and `.hc-footer`. Home, Work, and About each import this file plus their own page-specific stylesheet for content that doesn't generalize (Home: hero, skills marquee; Work: hero copy, quick-nav pills, category `scroll-margin-top`, confidentiality note styling; About: job/mini-card grids, education/certification layout, print rules — see below).
  - **`.hc-icon-btn` direction is page-scoped, not global**: the default hover slides the double-arrow track `translateX(-50%)` (arrow exits left, next one enters from the right). Some hero/card actions want the opposite feel; rather than change the shared default (which would flip every `.hc-icon-btn` site-wide, including ones that read correctly as-is), pages that want the reverse pair the base `hc-icon-btn` class with a page-scoped `.hc-reverse-icon-btn` modifier defined in that page's own `_<page>.css` (same class name reused per page — Home's `_index.css`, Work's `_work.css`, Services' `_services.css` — not a single shared rule in `hc-shared.css`, since not every `.hc-icon-btn` on a page should necessarily flip).
- **HcNav / HcFooter** (`src/components/HcNav`, `src/components/HcFooter`): shared Astro components used by all hc- pages so the floating-pill nav (scroll-hide-on-down script, active-link highlighting via `Astro.url.pathname`, links ordered Home → Work → Services → About) and the black card-style footer aren't duplicated per page. `HcFooter`'s column grid is `auto repeat(5, 1fr) auto` (brand, Home, Work, Services, About, Contact, Location) to fit the Services column alongside the four that existed before it. Certifications uses the separate `Navbar`/`Footer` components instead — the two pairs are not interchangeable (different markup, classes, and token set).
- **Components**: Each component has its own folder under `src/components/` with `index.astro` + a matching `.css` file (where applicable) imported in the frontmatter. CSS imported this way is bundled globally (not scoped).
- **Layout**: `BaseLayout` wraps every page — it injects the `<html>` shell, sets favicon links, imports `global.css` (still loaded site-wide for the legacy pages and its scroll-reveal styles), loads RemixIcon and Poppins from CDN, and includes the scroll-reveal script (see below).
- **Styles**: Legacy global CSS variables and shared utility classes (`.section__label`, `.section__heading`, `.tag`, `.btn`, `.btn--primary`, `.btn--outline`, `.btn--outline-dark`) live in `src/styles/global.css`; the hc- equivalents live in `src/styles/hc-shared.css` (see above). Component-specific styles are in their own `.css` files (e.g. `Navbar.css`, `Footer.css`). Page-specific styles live in a sibling `_<page>.css` file imported in the page's frontmatter — same convention as components, not scoped `<style>` blocks.
- **Scroll-reveal animations**: Dependency-free fade-in-on-scroll effect (no AOS library). Add `data-aos="fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade"` to an element (optionally `data-aos-delay`/`data-aos-duration` in ms) and the base styles in `global.css` plus the `IntersectionObserver` script in `BaseLayout` handle the rest — a `.aos-animate` class is added once the element scrolls into view. The base `[data-aos]` transition rule is written as `body [data-aos]` to out-specificity any component's own `transition:` shorthand (e.g. card hover effects), which otherwise silently strips the opacity transition.
- **Navbar**: CSS-only hamburger (hidden checkbox `#check`) — no JavaScript. Navbar CSS is scoped under `.navbar` to avoid leaking into page styles. Logo uses `assets/favicons/android-chrome-192x192.png` next to the site name.
- **Certification links**: About page "Certifications" entries link to `/certifications/<issuer>/<cert-slug>` (e.g. `/certifications/anthropic/claude-101`) — an Astro page generated via `getStaticPaths` in `src/pages/certifications/[...slug].astro`, not directly to the PDF in `public/certifications/`. Opening a raw static PDF in a new tab shows the browser's generic PDF-viewer icon, since there's no HTML document to carry the favicon; the `[...slug].astro` viewer page renders through `BaseLayout` (so the tab gets the site favicon + a real `<title>`) and embeds the PDF in an `<iframe>`, with a "Download" link to the underlying file. The cert list (title/issuer/icon/pdf path) is defined **inside** `getStaticPaths()` itself, not as a sibling top-level const — Astro's compiler only hoists what `getStaticPaths` references directly, so an outer `const certs = [...]` used solely by that function gets silently dropped from the build, causing "certs is not defined" at build time.
- **About page** (`/about`, Resume content): single hc- card-based layout (no layout toggle, no hero) — Professional Summary → Engineering Expertise (capability cards, reused verbatim from Home, incl. its animated stats bar right below) → Key Achievements (`rs-card` mini-cards, each with a tinted `rs-card__icon` circle instead of a badge/tech row, and equal-length descriptions for consistent card height) → Professional Experience → Relevant Experience → Education (`rs-edu-item` rows) → Certifications (`rs-cert` link grid) → Other Skills & Tools (`rs-skill-card` — one full-width card per category, stacked single-column, each with an alternating blue/violet `rs-skill-card__icon` circle beside the category label and a `rs-skill-card__tags` grid of bordered `rs-tag` chips that lift on hover; carries the `#skills` anchor targeted by nav/footer "Skills" links) → `hc-cta` band.
  - **Professional Experience and Relevant Experience** share the same structure: each job is an `hc-card rs-job-group` (white card, rounded corners, shadow) wrapping a `rs-job__header`-styled header (`border-bottom`, no horizontal padding of its own since the outer card's own padding already insets it to match the grid below) and a `rs-work-grid` — a 3-per-row grid (2 columns under 1100px, 1 under 750px) of `rs-work-card`s adapting Work's `.hc-work` Challenge/Solution/Impact breakdown into a compact card: a `rs-work-card__tile` at the top reuses `.hc-work__tile`'s dotted-pattern/alternating-blue-violet look at a smaller scale (mark circle + name + metric), followed by a `rs-work-card__name` heading (the name repeats — intentional, the user asked for the heading kept when it was briefly dropped as redundant), the Challenge/Solution/Impact `<dl>` (kept to single short sentences since detail lives on the linked case study, not the card), an optional `note` for confidential clients, and a decorative "Case Study" button — all reusing the shared `.hc-work__breakdown`/`.hc-work__point`/`.hc-work__actions` classes from `hc-shared.css`, just not the two-column `.hc-work` card shell or its sticky-stack behavior. Items without a real case study (e.g. Team Leadership, Relevant Experience's ITU coursework) set `caseStudy: false` to hide the button. `rs-work-card` has its own hover lift (`translateY(-7px)` + shadow).
  - **Education** (`rs-edu-item` rows, single `hc-card rs-panel`): each row has a 48px logo, degree/institution/note text, and a rounded pill for the date range — alternating blue/violet via `rs-edu-item--violet`, tied to a matching border-left accent and a subtle hover background/translateX shift. (A card-grid alternative was prototyped alongside this list version and discarded in favor of the list.)
  - `@media print` hides `.hc-nav`/`.hc-footer`/anything marked `.rs-noprint` (Engineering Expertise, stats bar, Other Skills & Tools, CTA band), flattens card chrome (shadows/backgrounds), and collapses `rs-work-grid` to a single column with `.hc-work__actions` hidden so Experience sections print as text only; a `.rs-print-header` (name + contact line) is hidden on screen and shown only when printing — it's the only place the name/title appears, since there's no on-screen hero.
- **Services page** (`/services`): HcNav → a full-width `hc-card sv-hero` (left-aligned, not centered) split into `sv-hero__content` (heading, subtitle, "View My Work" `hc-btn` + reversed `hc-icon-btn` pointing at `/work`) and a `sv-hero__directory` quick-jump list on the right — the same six categories as Work's project categories (AI, Enterprise, Mobile, Web, Automation, Templates), each row linking to `#service-<id>` on this page (mirrors Work's `pf-directory` pattern, reused as a design choice rather than shared code since the two directories link to different targets) → a `sv-grid` of six `hc-card sv-card`s (2-column, alternating blue/violet `sv-card__icon`), each with a title, description, a checklist of concrete deliverables (`sv-card__list`), and a footer with a shipped-project count plus a "Case studies" link to `/work#<id>` → an FAQ accordion (`sv-faq`/`sv-accordion`, same interaction pattern as Contact's `ct-faq` but pricing/process-focused questions, independently duplicated rather than shared since the two pages' FAQ content differs) → `hc-cta` band → HcFooter. The six service categories intentionally mirror Work's six project categories 1:1 (offering vs. proof-of-work), with matching icons and anchor ids so the Work and Services footer columns and the Services hero directory all resolve to the same six ids.
- **Contact page** (`/contact`): HcNav → a two-card row (`.ct-hero`) — left `hc-card ct-intro` with the page heading ("Have an idea? Let's talk.") and three `ct-info__row` icon-circle rows (phone/email/location, icons in `var(--hc-ink)` black to match the rest of the hc- system), right `hc-card ct-right` with a contact form (Name/Email/Subject/Message, `ct-form-field`s on a flat `var(--hc-bg)` fill, no borders) and a full-width black `ct-submit` button sharing the fields' 8px corner radius — then an FAQ accordion (`ct-faq`, plus/minus icon morph via CSS, vanilla-JS open/close, no external library) → CTA-less, straight to HcFooter. Layout and field set are loosely modeled on the Graflow template's actual `/contact-us` page (see `docs/research/graflow-template-source/pages/contact-us.html` — kept as a design reference, not wired into the build); the form is UI-only for now (button has no submit handler) since the site is static — real delivery is deferred until the site moves off GitHub Pages (e.g. to Vercel, where a serverless function could handle submission).
- **Assets**: Static files in `public/` are served at the root. Reference them as `/assets/gifs/animated-code.gif`, `/Muhammad_Suleman_Saleem_Resume.pdf`, etc.
- **Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` on push to `main` and deploys `dist/` via the GitHub Pages Actions environment. In the repo Settings → Pages, set source to **GitHub Actions**.

## Design Tokens (CSS Variables)

```css
--primary-color: #0d1520       /* dark navy — hero/footer bg */
--primary-color-mid: #1a2c3d
--accent-color: #2dd4bf         /* teal highlight */
--accent-dark: #0ea5a0          /* links/hover */
--text-dark: #1f2937
--text-light: #6b7280
--extra-light: #f0f8f9
--max-width: 1200px
```

Mobile breakpoint: `750px`. Navbar uses a CSS-only hamburger (hidden checkbox `#check`) — no JavaScript.

These tokens apply to Certifications only. Home, Work, About, and Contact use the separate hc- token set defined in `src/styles/hc-shared.css` (`--hc-ink: #14161b`, `--hc-bg: #f7f8fb`, `--hc-wash-blue`/`--hc-wash-violet` pastel accents, `--hc-footer-accent: #7ba6ff`) — see Architecture above.

## Site Structure (fully built)

- **Home** (`/`): HcNav → Hero → built-with stack marquee → Engineering Expertise (capability cards) → Selected works (Challenge/Solution/Impact per project) → Services (skills marquee) → animated stats bar → CTA band → HcFooter
- **Work** (`/work`): HcNav → Hero with quick-nav pills → Built With marquee → 6 project categories (AI Products, Enterprise/Desktop, Mobile, Web, Automation, Templates — anchors `#ai #enterprise #mobile #web #automation #templates`), each project rendered as an `.hc-work` Challenge/Solution/Impact card → CTA band → HcFooter
- **Services** (`/services`): HcNav → full-width hero (heading/subtitle/CTA + quick-jump directory to the six service cards) → 6 service cards (same categories as Work, framed as offerings with a deliverables checklist + case-study link) → FAQ accordion → CTA band → HcFooter (see Architecture)
- **About** (`/about`, Resume content): HcNav → Professional Summary → Engineering Expertise (capability cards, reused from Home) → animated stats bar (reused from Home) → Key Achievements → Professional Experience (per-job cards) → Relevant Experience → Education → Certifications → Other Skills & Tools → CTA band → HcFooter (no hero — see Architecture)
- **Contact** (`/contact`): HcNav → heading + phone/email/location info card alongside a Name/Email/Subject/Message form card → FAQ accordion → HcFooter (see Architecture)
- **Certifications** (`/certifications/<issuer>/<cert-slug>`): per-certificate HTML viewer page (favicon + PDF embed + download link), linked from the About page's Certifications list
- Home, Work, Services, About, and Contact share `HcNav` + `HcFooter` (hc- design system), with `.hc-main { padding-top: var(--navbar-height) }`. Certifications shares the legacy `Navbar` + `Footer` instead, with `padding-top: 65px` on `<main>` for the fixed nav (see Architecture)

## Confidentiality

- Orient Champions & UNITY: high-level only, no screenshots, no client specifics
- NebuFit, Creative OS, Houzi: safe to feature in full detail
