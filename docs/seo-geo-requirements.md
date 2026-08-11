# Portfolio SEO + GEO Requirements

Goal: make this portfolio site (1) rank well on traditional search engines (Google, Bing) and (2) get cited/mentioned by AI tools (ChatGPT, Claude, Perplexity, Google AI Overviews) when people ask about these projects.

Two disciplines, same site:
- **SEO** (Search Engine Optimization) — for classic search engines.
- **GEO** (Generative Engine Optimization, aka AEO/AIO/LLMO — no single agreed term) — for AI-generated answers. AI engines don't rank pages, they extract and cite content, so structure and clarity matter more than keyword density.

---

## 1. Page-level SEO basics (apply to every page, especially each project page)

- [x] Unique `<title>` tag per page (already in place pre-audit — every page passes its own `title` to `BaseLayout`)
- [x] Unique `<meta name="description">` per page (already in place pre-audit; case study pages use `project.impact`, which reads as an outcome statement rather than a pure page summary — worth revisiting if snippets look off in Search Console)
- [x] One `<h1>` per page (already in place pre-audit)
- [x] Clean, descriptive URLs (already in place pre-audit — `/work/<slug>`, `/about`, etc.)
- [x] `alt` text on all images (already in place pre-audit — 20/20 `<img>` tags had descriptive `alt`)
- [~] Mobile-responsive, fast-loading — responsive layout already in place; image compression deliberately **not** done — this repo has a standing decision to keep screenshots at full original resolution over compressing them (quality over file size, per prior explicit feedback — see `CLAUDE.md`), so this box stays intentionally unchecked
- [x] HTTPS enabled (GitHub Pages serves HTTPS by default)
- [x] Canonical tags — added via `BaseLayout` (`<link rel="canonical">`, derived from `Astro.url.pathname` + `Astro.site`)

## 2. Site-wide technical SEO

- [x] `sitemap.xml` — `@astrojs/sitemap` generates `sitemap-index.xml`/`sitemap-0.xml` at build time; submitted and verified in both Google Search Console and Bing Webmaster Tools (2026-08-11), site ownership confirmed on both via HTML-file + meta-tag verification (`public/google0e84be6cc33f7862.html`, `public/BingSiteAuth.xml`, and matching `google-site-verification`/`msvalidate.01` meta tags in `BaseLayout`)
- [x] `robots.txt` — added at `public/robots.txt`, explicit `Allow` rules for GPTBot, ChatGPT-User, ClaudeBot, Google-Extended, and PerplexityBot, plus a `Sitemap:` pointer
- [x] Structured data (JSON-LD):
  - `Person` schema — added, site-wide, in `BaseLayout` (name, job title, url, image, email, address, `sameAs` LinkedIn, `knowsAbout`)
  - Per-project schema — added as `CreativeWork` (not `SoftwareApplication`) on `work/[slug].astro`, since the project set spans apps, automations, and websites and `CreativeWork` fits all of them without overclaiming; no `dateCreated`/`programmingLanguage` fields since `projects.js` doesn't track those
- [x] Open Graph + Twitter Card meta tags — added via `BaseLayout` (`og:*`/`twitter:*`, image defaults to `/assets/images/profile.png`, case studies override with their own screenshot/logo when available)

## 3. Content structure for GEO (AI answer engines)

AI tools extract snippets rather than rank pages — write for extractability:

- [~] **Front-load the answer.** Partially in place: each case study hero shows a short (1–3 line, deliberately clamped) description, with the fuller "Project Overview" narrative immediately below it — but the hero text alone is shorter than the doc's 150–200 word target, so it doesn't fully stand alone before the Overview section. Left as-is rather than expanding the hero copy, since that's a content/design tradeoff (hero is meant to stay scannable) rather than a missing-infrastructure gap — revisit if this turns out to matter for citation quality.
- [x] Scannable sections with clear headers (already in place pre-audit — Built With / Project Overview / In the Product / Challenge·Solution·Impact, each its own `<h2>`-headed section)
- [x] Q&A block per project — added: a `cs-faq`/`cs-accordion` section on every `work/[slug].astro` page with exactly the three example questions from this doc ("What problem does `<name>` solve?", "What technologies were used to build `<name>`?", "Is the source code available?"), answered from existing project data (no new claims introduced)
- [x] Bullet points/lists for tech stack (already in place pre-audit — `cs-stack__tags` chips, `hc-work__breakdown` `<dl>`)
- [x] Updated About/resume page (already in place pre-audit — `/about`)
- [ ] Update content periodically — ongoing editorial practice, not a one-time implementation task; nothing to check off in code

## 4. Crawler access (don't block AI bots)

**Implemented** — `public/robots.txt` now matches this exactly (general `Allow: /` plus the five explicit blocks below, plus a `Sitemap:` pointer). Make sure `robots.txt` explicitly allows the major AI crawlers if you want them indexing you:

```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /
```

## 5. Third-party presence (backlinks + citations)

AI engines and Google both weigh external validation heavily — a site alone rarely gets cited without outside signals:

- [ ] GitHub repos for each project, linked back to the portfolio site in the README
- [ ] Post projects on dev.to, Hashnode, or Medium with a link back
- [ ] LinkedIn posts describing each project, linking to the site
- [ ] Submit to Product Hunt / relevant directories if applicable
- [ ] Get the portfolio linked from your GitHub profile README, resume, and any bio pages

## 6. What NOT to bother with

- `llms.txt` — not used by Google Search or confirmed to affect most AI crawlers; skip it
- Keyword-stuffing — hurts more than helps in both SEO and GEO
- Fake schema/structured data that doesn't match visible content (can get penalized)

## 7. Measuring results

- Google Search Console → track impressions/clicks per project page
- Manually query ChatGPT/Perplexity/Claude (with web search) with likely prospective-employer questions like "portfolio projects using React and Node.js by [Your Name]" and see if the site surfaces
- Re-check quarterly since AI citation behavior changes frequently

---

**Task for Claude Code:** Audit the current site against the checkboxes above, implement missing meta tags/schema/sitemap/robots.txt, and restructure project page content per section 3 (front-loaded summary + Q&A block + bullet-based tech stack) without changing the visual design unless asked.

**Status (2026-08-11):** Audited and implemented — sitemap (`@astrojs/sitemap`), `robots.txt`, canonical tags, Open Graph/Twitter Card meta, `Person` + per-project `CreativeWork` JSON-LD, and per-project Q&A accordions are all live, with no visual/design changes. Site ownership verified and sitemap submitted in both Google Search Console and Bing Webmaster Tools the same day. Bing/IndexNow submission is now automated: `.github/workflows/deploy.yml` posts the sitemap's URL list to `api.indexnow.org` on every deploy, so future page adds/edits are pushed automatically with no manual resubmission. Sections 5 and 7 (backlinks/third-party presence, and ongoing measurement) are manual/external practices, not code — still open. Full rationale and implementation notes live in the "SEO & GEO" section of `CLAUDE.md`.
