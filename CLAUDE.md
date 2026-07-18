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
    portfolio/index.astro → /portfolio
    resume/index.astro    → /resume
    contact/index.astro   → /contact
  components/         # Reusable components (each has index.astro + CSS file)
    Navbar/
    Hero/
  layouts/
    BaseLayout/index.astro  # Root HTML shell — imports global.css, CDN links
  styles/
    global.css          # CSS variables (:root), reset, body font
public/
  assets/
    gifs/               # animated-code.gif, animated-header.gif
    images/             # profile.png
  app-ads.txt           # Google AdSense ads.txt
.github/workflows/deploy.yml  # GitHub Actions → builds & deploys to Pages
```

## Architecture

- **Routing**: File-based via Astro. Each page lives in `src/pages/<name>/index.astro`.
- **Components**: Each component has its own folder under `src/components/` with `index.astro` + a matching `.css` file imported in the frontmatter. CSS imported this way is bundled globally (not scoped).
- **Layout**: `BaseLayout` wraps every page — it injects the `<html>` shell, imports `global.css`, and loads RemixIcon and Poppins from CDN.
- **Styles**: Global CSS variables live in `src/styles/global.css`. Component-specific styles are in their own `.css` files (e.g. `Navbar.css`, `Hero.css`). Stub pages (Portfolio, Resume, Contact) use scoped `<style>` blocks instead.
- **Assets**: Static files in `public/` are served at the root. Reference them as `/assets/gifs/animated-code.gif` etc.
- **Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` on push to `main` and deploys `dist/` via the GitHub Pages Actions environment. In the repo Settings → Pages, set source to **GitHub Actions**.

## Design Tokens (CSS Variables)

```css
--primary-color: #01313f
--primary-color-dark: #001c26
--secondary-color: #ca8a04
--text-dark: #1f2937
--text-light: #6b7280
--extra-light: #eff7f8
--max-width: 1200px
```

Mobile breakpoint: `750px`. Navbar uses a CSS-only hamburger (hidden checkbox `#check`) — no JavaScript.
