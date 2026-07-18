# Muhammad Suleman Saleem — Portfolio

Personal portfolio website built with **Astro**, deployed to GitHub Pages.

**Live site:** https://muhammadsulemansaleem.github.io

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS with custom properties
- RemixIcon + Poppins (CDN)
- GitHub Actions for CI/CD

## Getting Started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # production build → dist/
npm run preview   # preview dist/ locally
```

## Project Structure

```
src/
  components/     # Navbar, Hero, About, Skills, FeaturedProjects, Footer
  layouts/        # BaseLayout — HTML shell shared by all pages
  pages/          # File-based routing (index, portfolio, resume, contact)
                  #   portfolio/resume/contact each ship a sibling _<page>.css
  styles/         # global.css — CSS variables, reset, shared utility classes
public/
  assets/         # Static images and GIFs
  favicon set, apple/android touch icons, resume PDF, app-ads.txt
.github/
  workflows/      # GitHub Actions deploy workflow
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions.
GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.

## Documentation

For AI assistant guidance and architecture notes, see [`CLAUDE.md`](./CLAUDE.md).

> **Note:** Keep `README.md` and `CLAUDE.md` in sync — whenever one is updated, update the other.
