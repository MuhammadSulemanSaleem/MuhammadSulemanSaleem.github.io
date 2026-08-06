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
    _index.css              home-page-specific styles (hero, selected-work tint variants, skills marquee, capability illustrations, stats)
    portfolio/
      index.astro          → /portfolio (also hc- design system: HcNav/HcFooter + hc-shared.css + _portfolio.css)
      _portfolio.css        page-specific styles (hero, quick-nav pills, category headers, confidentiality note)
    resume/
      index.astro           → /resume (also hc- design system: HcNav/HcFooter + hc-shared.css + _resume.css)
      _resume.css            page-specific styles (hero, stat/job/mini-card layout, education, certifications, print rules)
    contact/
      index.astro           → /contact (legacy navy/teal design system: shared Navbar/Footer)
      _contact.css
    certifications/
      [...slug].astro       → /certifications/<issuer>/<cert-slug> (HTML PDF viewer, legacy design system)
      _certifications.css
  components/
    HcNav/                fixed floating-pill nav for hc- pages (Home, Portfolio, Resume) — scroll-hide script, active-link highlighting via Astro.url.pathname
    HcFooter/              black card-style footer for hc- pages (Home, Portfolio, Resume) — same column layout/links on all three
    Navbar/                fixed nav, CSS-only hamburger menu — legacy design system (Contact/Certifications)
    Footer/                6-column footer with anchor links + brand description — legacy design system (Contact/Certifications)
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
  Muhammad_Suleman_Saleem_Resume.pdf   # linked from /resume Download Resume button
  app-ads.txt           # Google AdSense ads.txt
.github/workflows/deploy.yml  # GitHub Actions → builds & deploys to Pages
```

## Architecture

- **Routing**: File-based via Astro. Each page lives in `src/pages/<name>/index.astro`, except Home which lives directly at `src/pages/index.astro`.
- **Two design systems coexist**: Home, Portfolio, and Resume use the newer "hc-" Graflow-style system (`src/styles/hc-shared.css` + a page-specific `_<page>.css`, `HcNav`/`HcFooter` components, Sora/Manrope fonts). Contact and Certifications still use the original navy/teal system (`src/styles/global.css`, `Navbar`/`Footer` components, Poppins). This is a known, intentional mid-migration state, not a bug — Home was redesigned first, Portfolio and Resume followed, Contact/Certifications have not been migrated yet.
- **hc- shared design system** (`src/styles/hc-shared.css`): the page shell/tokens (`.hc-page` — `--hc-ink`, `--hc-bg`, `--hc-wash-blue`, `--hc-wash-violet`, `--hc-footer-accent`, ambient corner-wash background), typography (`.hc-eyebrow`, `.hc-heading`), the `.hc-card` surface, buttons (`.hc-btn`, `.hc-btn--primary`, `.hc-btn--outline`, `.hc-icon-btn` with its sliding double-arrow track), `.hc-nav`/`.hc-main`, the `.hc-stack` "Built With" marquee, the `.hc-work` Challenge/Solution/Impact card (two-column: `.hc-work__content` with a `<dl>` breakdown + `.hc-work__tile` tinted mark/name/metric panel, `position: sticky` so successive cards stack while scrolling), `.hc-stats`, `.hc-cta` band, and `.hc-footer`. Home, Portfolio, and Resume each import this file plus their own page-specific stylesheet for content that doesn't generalize (Home: hero, skills marquee, capability illustrations; Portfolio: hero copy, quick-nav pills, category `scroll-margin-top`, confidentiality note styling; Resume: hero, stat/job/mini-card grids, education/certification layout, print rules — see below).
- **HcNav / HcFooter** (`src/components/HcNav`, `src/components/HcFooter`): shared Astro components used by all three hc- pages so the floating-pill nav (scroll-hide-on-down script, active-link highlighting via `Astro.url.pathname`) and the black card-style footer aren't duplicated per page. Legacy pages use the separate `Navbar`/`Footer` components instead — the two pairs are not interchangeable (different markup, classes, and token set).
- **Components**: Each component has its own folder under `src/components/` with `index.astro` + a matching `.css` file (where applicable) imported in the frontmatter. CSS imported this way is bundled globally (not scoped).
- **Layout**: `BaseLayout` wraps every page — it injects the `<html>` shell, sets favicon links, imports `global.css` (still loaded site-wide for the legacy pages and its scroll-reveal styles), loads RemixIcon and Poppins from CDN, and includes the scroll-reveal script (see below).
- **Styles**: Legacy global CSS variables and shared utility classes (`.section__label`, `.section__heading`, `.tag`, `.btn`, `.btn--primary`, `.btn--outline`, `.btn--outline-dark`) live in `src/styles/global.css`; the hc- equivalents live in `src/styles/hc-shared.css` (see above). Component-specific styles are in their own `.css` files (e.g. `Navbar.css`, `Footer.css`). Page-specific styles live in a sibling `_<page>.css` file imported in the page's frontmatter — same convention as components, not scoped `<style>` blocks.
- **Scroll-reveal animations**: Dependency-free fade-in-on-scroll effect (no AOS library). Add `data-aos="fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade"` to an element (optionally `data-aos-delay`/`data-aos-duration` in ms) and the base styles in `global.css` plus the `IntersectionObserver` script in `BaseLayout` handle the rest — a `.aos-animate` class is added once the element scrolls into view. The base `[data-aos]` transition rule is written as `body [data-aos]` to out-specificity any component's own `transition:` shorthand (e.g. card hover effects), which otherwise silently strips the opacity transition.
- **Navbar**: CSS-only hamburger (hidden checkbox `#check`) — no JavaScript. Navbar CSS is scoped under `.navbar` to avoid leaking into page styles. Logo uses `assets/favicons/android-chrome-192x192.png` next to the site name.
- **Certification links**: Resume "Certifications" entries link to `/certifications/<issuer>/<cert-slug>` (e.g. `/certifications/anthropic/claude-101`) — an Astro page generated via `getStaticPaths` in `src/pages/certifications/[...slug].astro`, not directly to the PDF in `public/certifications/`. Opening a raw static PDF in a new tab shows the browser's generic PDF-viewer icon, since there's no HTML document to carry the favicon; the `[...slug].astro` viewer page renders through `BaseLayout` (so the tab gets the site favicon + a real `<title>`) and embeds the PDF in an `<iframe>`, with a "Download" link to the underlying file. The cert list (title/issuer/icon/pdf path) is defined **inside** `getStaticPaths()` itself, not as a sibling top-level const — Astro's compiler only hoists what `getStaticPaths` references directly, so an outer `const certs = [...]` used solely by that function gets silently dropped from the build, causing "certs is not defined" at build time.
- **Resume page** (`/resume`): single hc- card-based layout (no layout toggle) — hero (name/role/core-tech chips/actions) → `hc-stats` → Professional Summary → Areas of Expertise (chip grid) → Key Achievements / Professional Experience / Relevant Experience as `rs-card` mini-cards (grouped per job inside a `rs-job` card for Experience) → Education (`rs-edu-item` rows) → Certifications (`rs-cert` link grid) → Other Skills & Tools (`rs-skill-card` grid) → `hc-cta` band. All of these are page-specific `rs-` classes in `_resume.css`, built on the shared `hc-card`/`hc-section`/`hc-eyebrow`/`hc-heading` primitives rather than reusing `.hc-work` (whose two-column sticky layout doesn't fit small list items). `@media print` hides `.hc-nav`/`.hc-footer`/anything marked `.rs-noprint` (stats bar, Other Skills & Tools, CTA band) and flattens card chrome (shadows/backgrounds) for cleaner ink usage; a `.rs-print-header` (name + contact line) is hidden on screen and shown only when printing.
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

These tokens apply to Contact and Certifications only. Home, Portfolio, and Resume use the separate hc- token set defined in `src/styles/hc-shared.css` (`--hc-ink: #14161b`, `--hc-bg: #f7f8fb`, `--hc-wash-blue`/`--hc-wash-violet` pastel accents, `--hc-footer-accent: #7ba6ff`) — see Architecture above.

## Site Structure (fully built)

- **Home** (`/`): HcNav → Hero → built-with stack marquee → Selected works (Challenge/Solution/Impact per project) → Services (skills marquee) → Engineering Expertise (capability cards) → animated stats bar → CTA band → HcFooter
- **Portfolio** (`/portfolio`): HcNav → Hero with quick-nav pills → Built With marquee → 6 project categories (AI Products, Enterprise/Desktop, Mobile, Web, Automation, Templates — anchors `#ai #enterprise #mobile #web #automation #templates`), each project rendered as an `.hc-work` Challenge/Solution/Impact card → CTA band → HcFooter
- **Resume** (`/resume`): HcNav → Hero (name/role/core-tech chips, Download Resume + LinkedIn actions) → stats bar → Professional Summary → Areas of Expertise → Key Achievements → Professional Experience (per-job cards) → Relevant Experience → Education → Certifications → Other Skills & Tools → CTA band → HcFooter (see Architecture)
- **Contact** (`/contact`): contact cards (email, LinkedIn, phone, location) + LinkedIn CTA
- **Certifications** (`/certifications/<issuer>/<cert-slug>`): per-certificate HTML viewer page (favicon + PDF embed + download link), linked from the Resume Certifications list
- Home, Portfolio, and Resume share `HcNav` + `HcFooter` (hc- design system), with `.hc-main { padding-top: var(--navbar-height) }`. Contact and Certifications share the legacy `Navbar` + `Footer` instead, with `padding-top: 65px` on `<main>` for the fixed nav (see Architecture)

## Confidentiality

- Orient Champions & UNITY: high-level only, no screenshots, no client specifics
- NebuFit, Creative OS, Houzi: safe to feature in full detail
