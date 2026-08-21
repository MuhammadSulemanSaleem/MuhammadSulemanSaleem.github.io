# Muhammad Suleman Saleem — Portfolio

Personal portfolio website built with **Astro**, deployed to GitHub Pages.

**Live site:** https://sulemansaleem.com

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS with custom properties
- RemixIcon + Poppins (CDN); Home, Work, Services, About, and Contact use their own Sora/Manrope pairing and "hc-" token set instead
- Dependency-free scroll-reveal animations (`data-aos` attributes + `IntersectionObserver`)
- Two design systems coexist mid-migration: Home + Work + Services + About + Contact share `HcNav`/`HcFooter` components and `src/styles/hc-shared.css` (Graflow-style); Certifications still uses the legacy `Navbar`/`Footer` components and `src/styles/global.css` (navy/teal)
- Work's and About page's project/achievement cards reuse `hc-card`-based patterns from the shared "hc-" system (the About page's Engineering Expertise section reuses Home's `.hc-work` pattern verbatim; its Professional Experience and Relevant Experience sections both wrap the same Challenge/Solution/Impact breakdown into a compact 3-per-row card grid inside an outer `hc-card`, instead of Work's full two-column `.hc-work` card)
- Services mirrors Work's six project categories as offerings (deliverables checklist + case-study link back to Work), with its own FAQ accordion
- Every project on `/work` links to its own case study at `/work/<slug>` (hero with a mark tile or, if set, the project's real logo; tech-stack chips; a narrative Project Overview; full Challenge/Solution/Impact; prev/next nav), generated via `getStaticPaths` from the shared project list in `src/data/projects.js`; the case study page uses fuller `challengeDetail`/`solutionDetail`/`impactDetail`/`overview` fields, while `/work`'s own category cards use the shorter `challenge`/`solution`/`impact`, both written from the same underlying facts. Home's "Selected works" and any About page entry that's the same underlying project (not a hand-grouped summary) link there too, via an explicit `slug` field rather than name matching
- Projects cleared to show real product screenshots (NebuFit, Creative OS, Houzi, Orient Champions, UNITY, Linked Golf, HouziBuilder, ATTN Agency Homepage, Kumquat, Foodii, Techtiz Corporate Website, AGENTC, Exodus App, Outreach Email Classification Automation, Social Media Posting Automation, Lead Response Automation, Capital Shack — Document OCR Processing, Ramirez Legal Group — ClickUp Dashboard Sync, Zendesk AI Support Automation) have an entry in `src/data/screenshots.js`, keyed by slug: a `hero` image replaces the case study hero's mark-tile/logo alongside the title/description (a pre-rendered multi-device mockup composite, not a raw screenshot — AGENTC's, Techtiz's/ATTN's, Outreach Email Classification Automation's, and Social Media Posting Automation's are desktop-monitor composites since those "products" are n8n workflow canvases or websites, not phone apps; Outreach Email Classification Automation's is a single-monitor composite, not the two-monitor pair AGENTC/Techtiz/ATTN/Social Media Posting Automation use), and a `gallery` (the complete screenshot set, not a curated highlight reel) renders in an auto-scrolling "In the Product" marquee further down, with prev/next arrows and hover-to-pause — both are conditional and simply omitted for projects without an entry, and Outreach Email Classification Automation deliberately sets an empty `gallery` so only its hero renders, no marquee
- `hc-icon-btn`'s hover-slide direction is page-scoped: pages that want it reversed pair the shared class with a page-local `.hc-reverse-icon-btn` modifier in their own `_<page>.css`, rather than flipping the shared default in `hc-shared.css`
- GitHub Actions for CI/CD
- The `/contact` form submits to a Nodemailer-powered Vercel serverless function in the sibling `contact-api/` directory — a separate Vercel project (own `package.json`, deployed with Root Directory `contact-api/`), not part of this site's own build/deploy. The static site itself stays on GitHub Pages unchanged. Live at `https://portfolio-contact-api-ecru.vercel.app/api/contact`, deployed and verified end-to-end (real email delivery + validation/honeypot/CORS behavior); see `contact-api/README.md`
- SEO/GEO: `@astrojs/sitemap` (pinned to `3.2.1` — later versions need an Astro 5-only integration hook) generates `sitemap-index.xml`/`sitemap-0.xml` at build time; `public/robots.txt` explicitly allows GPTBot/ChatGPT-User/ClaudeBot/Google-Extended/PerplexityBot; `BaseLayout` adds canonical links, Open Graph/Twitter Card meta tags, and a site-wide `Person` JSON-LD schema; each case study (`work/[slug].astro`) adds its own `CreativeWork` JSON-LD plus a Q&A accordion (problem solved / tech stack / source availability) for AI-answer-engine extractability — see `docs/seo-geo-requirements.md` and the "SEO & GEO" section of `CLAUDE.md` for the full rationale
- Bing Site Scan warnings (missing alt text, `<title>` over 70 chars, missing `<h1>`) were fixed across the Work/About/Certifications pages: icon `<img>`s got descriptive alt text, an optional `shortName`/`shortTitle` field overrides a long project/cert name in `<title>` only (the on-page heading keeps the full name), and the cert-viewer header uses a real `<h1>` — see the "SEO & GEO" section of `CLAUDE.md`
- Site ownership is verified with both Google Search Console and Bing Webmaster Tools, sitemap submitted to both. Bing/IndexNow gets automatic push notification on every deploy — `.github/workflows/deploy.yml` posts the sitemap's URL list to the IndexNow API right after `actions/deploy-pages@v4`, so new/changed pages get surfaced without any manual resubmission

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
  resume PDF, app-ads.txt, robots.txt (AI-crawler allow rules + sitemap pointer)
.github/
  workflows/      # GitHub Actions deploy workflow
contact-api/      # Separate Vercel serverless function project (own package.json/README), powers the
                  # /contact form's mail delivery via Nodemailer. Not built/deployed by this site — see below
docs/             # seo-geo-requirements.md; projects-description/projects-description-2021-2026.md — the
                  # user's own source-of-truth project write-ups, used to cross-check projects.js/About copy
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions.
GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.

The `contact-api/` function deploys separately and independently as its own Vercel project (Root Directory `contact-api/`, currently linked only via the local Vercel CLI, not GitHub auto-deploy) — see `contact-api/README.md` for setup.

## Documentation

For AI assistant guidance and architecture notes, see [`CLAUDE.md`](./CLAUDE.md).

> **Note:** Keep `README.md` and `CLAUDE.md` in sync — whenever one is updated, update the other.
