# Muhammad Suleman Saleem — Portfolio

Personal portfolio website built with **Astro**, deployed to GitHub Pages.

**Live site:** https://muhammadsulemansaleem.github.io

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS with custom properties
- RemixIcon + Poppins (CDN); Home, Work, Services, About, and Contact use their own Sora/Manrope pairing and "hc-" token set instead
- Dependency-free scroll-reveal animations (`data-aos` attributes + `IntersectionObserver`)
- Two design systems coexist mid-migration: Home + Work + Services + About + Contact share `HcNav`/`HcFooter` components and `src/styles/hc-shared.css` (Graflow-style); Certifications still uses the legacy `Navbar`/`Footer` components and `src/styles/global.css` (navy/teal)
- Work's and About page's project/achievement cards reuse `hc-card`-based patterns from the shared "hc-" system (the About page's Engineering Expertise section reuses Home's `.hc-work` pattern verbatim; its Professional Experience and Relevant Experience sections both wrap the same Challenge/Solution/Impact breakdown into a compact 3-per-row card grid inside an outer `hc-card`, instead of Work's full two-column `.hc-work` card)
- Services mirrors Work's six project categories as offerings (deliverables checklist + case-study link back to Work), with its own FAQ accordion
- Every project on `/work` links to its own case study at `/work/<slug>` (hero with a mark tile or, if set, the project's real logo; tech-stack chips; a narrative Project Overview; full Challenge/Solution/Impact; prev/next nav), generated via `getStaticPaths` from the shared project list in `src/data/projects.js`; the case study page uses fuller `challengeDetail`/`solutionDetail`/`impactDetail`/`overview` fields, while `/work`'s own category cards use the shorter `challenge`/`solution`/`impact`, both written from the same underlying facts. Home's "Selected works" and any About page entry that's the same underlying project (not a hand-grouped summary) link there too, via an explicit `slug` field rather than name matching
- Projects cleared to show real product screenshots (NebuFit, Creative OS, Houzi, Orient Champions, UNITY) have an entry in `src/data/screenshots.js`, keyed by slug: a `hero` image replaces the case study hero's mark-tile/logo alongside the title/description (a pre-rendered multi-device mockup composite, not a raw screenshot), and a `gallery` (the complete screenshot set, not a curated highlight reel) renders in an auto-scrolling "In the Product" marquee further down, with prev/next arrows and hover-to-pause. Both are conditional and simply omitted for projects without an entry
- `hc-icon-btn`'s hover-slide direction is page-scoped: pages that want it reversed pair the shared class with a page-local `.hc-reverse-icon-btn` modifier in their own `_<page>.css`, rather than flipping the shared default in `hc-shared.css`
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
  components/     # HcNav, HcFooter — used by Home/Work/Services/About/Contact (hc- design system)
                  # Navbar, Footer — used by Certifications only (legacy design system)
  layouts/        # BaseLayout — HTML shell shared by all pages
  data/           # projects.js (canonical 19-project list, source for /work + every /work/<slug>),
                  # techIcons.js, resumeSkills.js, screenshots.js (per-slug case-study screenshots)
  pages/          # File-based routing
                  #   index.astro — home page (hc- design system), styled via hc-shared.css + sibling _index.css
                  #   work/index.astro — also hc- design system, styled via hc-shared.css + sibling _work.css
                  #   work/[slug].astro — per-project case study (one per project in src/data/projects.js),
                  #   styled via hc-shared.css + _work.css + sibling _case-study.css
                  #   services/index.astro — also hc- design system, styled via hc-shared.css + sibling _services.css
                  #   about/index.astro — also hc- design system, styled via hc-shared.css + sibling _about.css
                  #   contact/index.astro — also hc- design system, styled via hc-shared.css + sibling _contact.css
                  #   certifications/[...slug].astro — per-cert PDF viewer page (legacy design system)
                  #   (favicon + title via BaseLayout, so cert PDFs open in a
                  #   real HTML page instead of the browser's generic PDF tab)
  styles/         # global.css — legacy CSS variables, reset, shared utility classes
                  # hc-shared.css — shared "hc-" Graflow-style design system (Home + Work + Services + About + Contact)
public/
  assets/
    gifs/           # Static GIFs
    images/         # Static images
    favicons/       # favicon set, apple/android touch icons
    screenshots/    # Real product screenshots per project slug (e.g. nebufit/), used by src/data/screenshots.js
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
