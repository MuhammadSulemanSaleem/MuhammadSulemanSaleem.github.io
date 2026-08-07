# Muhammad Suleman Saleem — Portfolio

Personal portfolio website built with **Astro**, deployed to GitHub Pages.

**Live site:** https://muhammadsulemansaleem.github.io

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS with custom properties
- RemixIcon + Poppins (CDN); Home, Portfolio, and Resume use their own Sora/Manrope pairing and "hc-" token set instead
- Dependency-free scroll-reveal animations (`data-aos` attributes + `IntersectionObserver`)
- Two design systems coexist mid-migration: Home + Portfolio + Resume share `HcNav`/`HcFooter` components and `src/styles/hc-shared.css` (Graflow-style); Contact/Certifications still use the legacy `Navbar`/`Footer` components and `src/styles/global.css` (navy/teal)
- Portfolio's and Resume's project/achievement cards reuse `hc-card`-based patterns from the shared "hc-" system (Resume's Engineering Expertise section reuses Home's `.hc-work` pattern verbatim; its Professional Experience and Relevant Experience sections both wrap the same Challenge/Solution/Impact breakdown into a compact 3-per-row card grid inside an outer `hc-card`, instead of Portfolio's full two-column `.hc-work` card)
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
  components/     # HcNav, HcFooter — used by Home/Portfolio/Resume (hc- design system)
                  # Navbar, Footer — used by Contact/Certifications (legacy design system)
  layouts/        # BaseLayout — HTML shell shared by all pages
  pages/          # File-based routing
                  #   index.astro — home page (hc- design system), styled via hc-shared.css + sibling _index.css
                  #   portfolio/index.astro — also hc- design system, styled via hc-shared.css + sibling _portfolio.css
                  #   resume/index.astro — also hc- design system, styled via hc-shared.css + sibling _resume.css
                  #   contact ships a sibling _contact.css (legacy design system)
                  #   certifications/[...slug].astro — per-cert PDF viewer page (legacy design system)
                  #   (favicon + title via BaseLayout, so cert PDFs open in a
                  #   real HTML page instead of the browser's generic PDF tab)
  styles/         # global.css — legacy CSS variables, reset, shared utility classes
                  # hc-shared.css — shared "hc-" Graflow-style design system (Home + Portfolio + Resume)
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
