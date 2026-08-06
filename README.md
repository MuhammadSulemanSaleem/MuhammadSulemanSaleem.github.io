# Muhammad Suleman Saleem — Portfolio

Personal portfolio website built with **Astro**, deployed to GitHub Pages.

**Live site:** https://muhammadsulemansaleem.github.io

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS with custom properties
- RemixIcon + Poppins (CDN); Home page uses its own Sora/Manrope pairing and token set
- Dependency-free scroll-reveal animations (`data-aos` attributes + `IntersectionObserver`)
- Home page is self-contained — its own nav/footer markup and styles (`_index.css`), not the shared `Navbar`/`Footer` components used by Portfolio/Resume/Contact
- Resume page ships a Plain/Cards layout toggle (one markup, two CSS treatments, persisted via `localStorage`)
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
  components/     # Navbar, Footer — used by Portfolio/Resume/Contact, not Home
  layouts/        # BaseLayout — HTML shell shared by all pages
  pages/          # File-based routing
                  #   index.astro — self-contained home page, styled via sibling _index.css
                  #   portfolio/resume/contact each ship a sibling _<page>.css
                  #   certifications/[...slug].astro — per-cert PDF viewer page
                  #   (favicon + title via BaseLayout, so cert PDFs open in a
                  #   real HTML page instead of the browser's generic PDF tab)
  styles/         # global.css — CSS variables, reset, shared utility classes
public/
  assets/
    gifs/           # Static GIFs
    images/         # Static images
    favicons/       # favicon set, apple/android touch icons
  resume PDF, app-ads.txt
.github/
  workflows/      # GitHub Actions deploy workflow
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions.
GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.

## Documentation

For AI assistant guidance and architecture notes, see [`CLAUDE.md`](./CLAUDE.md).

> **Note:** Keep `README.md` and `CLAUDE.md` in sync — whenever one is updated, update the other.
