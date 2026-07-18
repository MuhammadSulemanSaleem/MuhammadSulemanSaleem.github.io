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
    index.astro           → /
    portfolio/
      index.astro          → /portfolio
      _portfolio.css        page-specific styles (imported in frontmatter)
    resume/
      index.astro           → /resume
      _resume.css
    contact/
      index.astro           → /contact
      _contact.css
  components/         # Reusable components (each has index.astro + CSS file)
    Navbar/            fixed nav, CSS-only hamburger menu
    Hero/               home page hero
    About/              stats + bio section
    Skills/              8 skill categories
    FeaturedProjects/    3 project cards (home page)
    Footer/               6-column footer with anchor links + brand description
  layouts/
    BaseLayout/index.astro  # Root HTML shell — favicon links, imports global.css, CDN links
  styles/
    global.css          # CSS variables (:root), reset, shared utility classes
public/
  assets/
    gifs/               # animated-code.gif, animated-header.gif
    images/             # profile.png
  favicon.ico, favicon-16x16.png, favicon-32x32.png,
  apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
  Muhammad_Suleman_Saleem_Resume.pdf   # linked from /resume Print/Save button
  app-ads.txt           # Google AdSense ads.txt
.github/workflows/deploy.yml  # GitHub Actions → builds & deploys to Pages
```

## Architecture

- **Routing**: File-based via Astro. Each page lives in `src/pages/<name>/index.astro`.
- **Components**: Each component has its own folder under `src/components/` with `index.astro` + a matching `.css` file imported in the frontmatter. CSS imported this way is bundled globally (not scoped).
- **Layout**: `BaseLayout` wraps every page — it injects the `<html>` shell, sets favicon links, imports `global.css`, and loads RemixIcon and Poppins from CDN.
- **Styles**: Global CSS variables and shared utility classes (`.section__label`, `.section__heading`, `.tag`, `.btn`, `.btn--primary`, `.btn--outline`, `.btn--outline-dark`) live in `src/styles/global.css`. Component-specific styles are in their own `.css` files (e.g. `Navbar.css`, `Hero.css`). Page-specific styles (Portfolio, Resume, Contact) live in a sibling `_<page>.css` file imported in the page's frontmatter — same convention as components, not scoped `<style>` blocks.
- **Navbar**: CSS-only hamburger (hidden checkbox `#check`) — no JavaScript. Navbar CSS is scoped under `.navbar` to avoid leaking into page styles. Logo uses `android-chrome-192x192.png` next to the site name.
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

## Site Structure (fully built)

- **Home** (`/`): Navbar → Hero (dark) → About (stats + bio) → Skills (8 categories) → FeaturedProjects (3 cards) → Footer
- **Portfolio** (`/portfolio`): 6 project sections (AI Products, Enterprise/Desktop, Mobile, Web, Automation, Templates)
- **Resume** (`/resume`): HTML resume + Print/Save PDF button (links to `Muhammad_Suleman_Saleem_Resume.pdf`)
- **Contact** (`/contact`): contact cards (email, LinkedIn, phone, location) + LinkedIn CTA
- All pages have Navbar + Footer; `padding-top: 65px` on `<main>` for the fixed nav

## Confidentiality

- Orient Champions & UNITY: high-level only, no screenshots, no client specifics
- NebuFit, Creative OS, Houzi: safe to feature in full detail
