# Mentor Feedback — 2026-08-04

**Reviewer:** Adil Soomro
**Channel:** LinkedIn message
**Portfolio reviewed:** <https://muhammadsulemansaleem.github.io/>

## Feedback

> The website gives very strong impressions of vibe coding. Give it some human touch.
>
> The pill shape tag above every heading is a definite give away of vibe coded website.

Reference examples shared:

- <https://graflow-portfolio-website-template.webflow.io>
- <https://meko-template.webflow.io>

> Focus on impact rather than explaining what the project is. What did you do to the project, that changed its trajectory. People look for outcomes, not the description.

## Reference Review

Reviewed both examples for what they do instead of a boxed eyebrow label:

- **Graflow** — no eyebrow tag at all above section headings; a big bold heading is followed directly by a plain descriptive sentence. Tags/chips are borderless, small rounded-rect (not full pill). CTA buttons are solid black pills paired with a circular "+" icon.
- **Meko** — very bold/heavy grotesk display type carries section identity; stat rows are big numbers over a small letter-spaced label with hairline dividers, no pill/border anywhere; where a small eyebrow label is used, it's plain text next to a small icon, no background or border.

Common thread: neither site uses a bordered/pill badge above headings — the "giveaway" isn't the pill shape specifically, it's the boxed-label-above-heading pattern itself, plus generic default typography (this site currently uses Poppins throughout, a very common template font).

## Chosen Design Direction — "Terminal / Code-Craft"

Discussed with Muhammad and agreed on a direction that keeps the existing navy/teal brand (matches his LinkedIn banner) but replaces the generic template typography and label/tag patterns with something specific to a software engineer's portfolio:

- **Type**: Space Grotesk (display/headings) + Inter (body) + JetBrains Mono (labels/tags/badges), replacing Poppins everywhere.
- **Section eyebrows**: code-comment style (`# about-me`, `# selected-work`) instead of the boxed/pill label above each heading.
- **Tags/chips**: flat monospace list, underlined instead of boxed in a pill (e.g. `flutter · node.js · claude-api`), replacing every rounded-pill tag/badge (tech tags, project badges, resume badges, built-with chips).

## Action Items

- [ ] Implement the "Terminal / Code-Craft" redesign above across the whole site (global tokens, Navbar, Hero, About, Skills, FeaturedProjects, Footer, Portfolio/Resume/Contact pages).
- [ ] Rewrite project descriptions (Portfolio page, Featured Projects) to lead with outcomes/impact ("what changed as a result") rather than describing what the project is or does.
