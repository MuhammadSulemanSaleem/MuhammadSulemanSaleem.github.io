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
    index.astro           → / (self-contained: own nav/footer markup, no shared components)
    _index.css             page-specific styles for the home page (Sora/Manrope fonts, its own dark/tint token set)
    portfolio/
      index.astro          → /portfolio
      _portfolio.css        page-specific styles (imported in frontmatter)
    resume/
      index.astro           → /resume
      _resume.css
    contact/
      index.astro           → /contact
      _contact.css
    certifications/
      [...slug].astro       → /certifications/<issuer>/<cert-slug> (HTML PDF viewer)
      _certifications.css
  components/         # Reusable components (each has index.astro + CSS file) — used by Portfolio/Resume/Contact, not Home
    Navbar/            fixed nav, CSS-only hamburger menu
    Footer/               6-column footer with anchor links + brand description
  layouts/
    BaseLayout/index.astro  # Root HTML shell — favicon links, imports global.css, CDN links
  styles/
    global.css          # CSS variables (:root), reset, shared utility classes
public/
  assets/
    gifs/               # animated-code.gif, animated-header.gif
    images/             # profile.png
    favicons/           # favicon.ico, favicon-16x16.png, favicon-32x32.png,
                         # apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
  Muhammad_Suleman_Saleem_Resume.pdf   # linked from /resume Print/Save button
  app-ads.txt           # Google AdSense ads.txt
.github/workflows/deploy.yml  # GitHub Actions → builds & deploys to Pages
```

## Architecture

- **Routing**: File-based via Astro. Each page lives in `src/pages/<name>/index.astro`, except Home which lives directly at `src/pages/index.astro`.
- **Home page**: `src/pages/index.astro` is intentionally self-contained — its nav (`.hc-nav`) and footer (`.hc-footer`) are inline markup in the page itself, not the shared `Navbar`/`Footer` components, and its styles live in the sibling `_index.css` rather than `global.css`. It uses its own token set (`--hc-ink`, `--hc-bg`, `--hc-wash-blue`, `--hc-wash-violet`, `--hc-footer-accent`) and its own fonts (Sora for headings, Manrope for body, loaded via `@import` at the top of `_index.css`) instead of the site-wide navy/teal tokens and Poppins. This means Home currently has a different nav/footer visual style than Portfolio/Resume/Contact (which still use the shared `Navbar`/`Footer` components and original design tokens) — a known inconsistency, not a bug, from redesigning Home first. Two inline `<script>` blocks at the bottom of `index.astro` handle hide-on-scroll-down nav behavior and the count-up animation for the stats bar (`.hc-stat__number`), both skipped under `prefers-reduced-motion`.
- **Components**: Each component has its own folder under `src/components/` with `index.astro` + a matching `.css` file imported in the frontmatter. CSS imported this way is bundled globally (not scoped). Only `Navbar` and `Footer` remain as shared components — Home no longer uses them (see above).
- **Layout**: `BaseLayout` wraps every page — it injects the `<html>` shell, sets favicon links, imports `global.css`, loads RemixIcon and Poppins from CDN, and includes the scroll-reveal script (see below).
- **Styles**: Global CSS variables and shared utility classes (`.section__label`, `.section__heading`, `.tag`, `.btn`, `.btn--primary`, `.btn--outline`, `.btn--outline-dark`) live in `src/styles/global.css`. Component-specific styles are in their own `.css` files (e.g. `Navbar.css`, `Footer.css`). Page-specific styles (Home, Portfolio, Resume, Contact) live in a sibling `_<page>.css` file imported in the page's frontmatter — same convention as components, not scoped `<style>` blocks.
- **Scroll-reveal animations**: Dependency-free fade-in-on-scroll effect (no AOS library). Add `data-aos="fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade"` to an element (optionally `data-aos-delay`/`data-aos-duration` in ms) and the base styles in `global.css` plus the `IntersectionObserver` script in `BaseLayout` handle the rest — a `.aos-animate` class is added once the element scrolls into view. The base `[data-aos]` transition rule is written as `body [data-aos]` to out-specificity any component's own `transition:` shorthand (e.g. card hover effects), which otherwise silently strips the opacity transition.
- **Navbar**: CSS-only hamburger (hidden checkbox `#check`) — no JavaScript. Navbar CSS is scoped under `.navbar` to avoid leaking into page styles. Logo uses `assets/favicons/android-chrome-192x192.png` next to the site name.
- **Certification links**: Resume "Certifications" entries link to `/certifications/<issuer>/<cert-slug>` (e.g. `/certifications/anthropic/claude-101`) — an Astro page generated via `getStaticPaths` in `src/pages/certifications/[...slug].astro`, not directly to the PDF in `public/certifications/`. Opening a raw static PDF in a new tab shows the browser's generic PDF-viewer icon, since there's no HTML document to carry the favicon; the `[...slug].astro` viewer page renders through `BaseLayout` (so the tab gets the site favicon + a real `<title>`) and embeds the PDF in an `<iframe>`, with a "Download" link to the underlying file. The cert list (title/issuer/icon/pdf path) is defined **inside** `getStaticPaths()` itself, not as a sibling top-level const — Astro's compiler only hoists what `getStaticPaths` references directly, so an outer `const certs = [...]` used solely by that function gets silently dropped from the build, causing "certs is not defined" at build time.
- **Resume layout toggle**: `/resume` renders one set of markup styled two ways — Plain (default) and Cards — switched by a floating pill toggle (bottom-right, `.resume-toggle`) that sets/removes `data-view="card"` on `#resume-page`. All card-mode visuals are CSS overrides scoped under `.resume-page[data-view='card'] ...` in `_resume.css`; nothing is duplicated in the markup. The choice persists via `localStorage` (`resumeView`), applied pre-paint by an `is:inline` script right after `<main>` opens to avoid a flash of the wrong layout. A second script (bottom of the page) wires up the buttons and keeps the toggle from overlapping the hero or footer: it compares the toggle's own `getBoundingClientRect()` against both on scroll/resize and hides it (`.resume-toggle--hidden`) whenever either would collide. `@media print` always forces the Plain layout and hides the toggle, regardless of the active on-screen view.
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

These tokens apply to Portfolio, Resume, Contact, and Certifications. The Home page (`/`) uses a separate token set defined in `_index.css` (`--hc-ink: #14161b`, `--hc-bg: #f7f8fb`, `--hc-wash-blue`/`--hc-wash-violet` pastel accents, `--hc-footer-accent: #7ba6ff`) — see Architecture above.

## Site Structure (fully built)

- **Home** (`/`): self-contained nav → Hero → built-with stack marquee → Selected works (Challenge/Solution/Impact per project) → Services (skills marquee) → Engineering Expertise (capability cards) → animated stats bar → CTA band → self-contained footer
- **Portfolio** (`/portfolio`): 6 project sections (AI Products, Enterprise/Desktop, Mobile, Web, Automation, Templates)
- **Resume** (`/resume`): HTML resume + Print/Save PDF button (links to `Muhammad_Suleman_Saleem_Resume.pdf`); floating Plain/Cards layout toggle (see Architecture)
- **Contact** (`/contact`): contact cards (email, LinkedIn, phone, location) + LinkedIn CTA
- **Certifications** (`/certifications/<issuer>/<cert-slug>`): per-certificate HTML viewer page (favicon + PDF embed + download link), linked from the Resume Certifications list
- Portfolio, Resume, Contact, and Certifications share `Navbar` + `Footer`, with `padding-top: 65px` on `<main>` for the fixed nav. Home has its own fixed nav/footer and does not use this padding convention (see Architecture)

## Confidentiality

- Orient Champions & UNITY: high-level only, no screenshots, no client specifics
- NebuFit, Creative OS, Houzi: safe to feature in full detail
