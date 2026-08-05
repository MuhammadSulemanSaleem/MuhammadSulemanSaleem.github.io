# Graflow Portfolio Template — Review & Documentation

Reviewed: 2026-08-05
Source: https://graflow-portfolio-website-template.webflow.io/
Downloaded assets (HTML + CSS): `docs/research/graflow-template-source/` — kept temporarily for reference, slated for removal later.

## 1. What it is

"Graflow" is a Webflow-made HTML portfolio template (by studio **Flowbies**, sold on the Webflow Marketplace) aimed at freelance digital product/UI designers. Demo persona: "Gabriel Bernard, a digital product designer." Built on Webflow's default export stack — static HTML/CSS + Webflow's own JS runtime + jQuery 3.5.1, no custom frontend framework.

**Stack fingerprint:**
- `webflow.3aeaaacf2.js` — Webflow's interactions/CMS runtime
- `jquery-3.5.1.min.js` (via cloudfront) — dependency of the above
- One compiled CSS bundle: `graflow-portfolio-website-template.webflow.482e8bbfc.min.css`
- Images served as `.avif` (photos) and `.svg` (icons/decorative blobs) from Webflow's asset CDN
- Fonts: **Cabinetgrotesk** (display/headings) + **Uncutsans** (body) — both loaded as custom `@font-face`, not Google Fonts

## 2. Site map

```
/                                          Home
/about                                     About / resume-lite (bio, work history, skills, stats)
/works                                     Full project index (4 case studies)
/service                                   Services + FAQ accordion
/pricing                                   2 pricing tiers + FAQ accordion
/blog                                      Blog index (6 posts, category-filterable)
/post/<slug>                               Blog post detail (CMS template, 1 example crawled)
/project/<slug>                            Case study detail (CMS template, 3 items — all reuse one template)
/contact-us                                Contact form + FAQ accordion
/admin-pages/style-guide                   Webflow's auto-generated type/color/component reference
/admin-pages/licenses                      Template license terms
/401, /404                                 Error/password-protected states
```

Nav dropdown ("Pages") also links to: Case study details, Service pricing, Blog details, Password protected, 404 Error — i.e. Webflow's standard "utility pages" bundle, left in as a starter kit for buyers.

## 3. Design tokens

### Color

Only a handful of colors are tokenized as CSS custom properties — everything else (the signature blue→purple hero gradient, dark navy buttons, etc.) is hardcoded per-element or delivered as background **image** assets rather than CSS gradients.

| Token | Value | Use |
|---|---|---|
| `--color--heading-text` | `#1e2127` | primary heading color |
| `--color--heading-seconday` | `#272a2f` | secondary heading color |
| `--color--paragraph-text` | `#454952` | body copy |
| `--color--text-light` | `#5a6170` | muted/secondary text |
| `--color--mid-gray` | `#e8eaef` | borders/dividers |
| `--color--mid-white` | `#f7f9fc` | card backgrounds |
| `--color--white-light` | `#f9fafc` | section backgrounds |
| `--color--white` | `white` | — |
| `--color--none` | `transparent` | — |

Notable finding: the **body background is a flat `#f7f9fc`**, not a gradient. The blue/purple/pink diagonal wash visible behind the nav on every page is four decorative **SVG blob images** (`Footer Right BG.svg`, `Footer Linear Bg.svg`, `right.svg`, `left.svg`) pinned to the four corners of `.page-wrapper` via `background-image` — a cheap way to fake an ambient gradient without actually painting one, and it means the "gradient" tint is identical on every page rather than computed.

Buttons are solid **near-black** (`#1e2127`-family) pill shapes with white text — no accent/brand color is used for CTAs at all; the only color signal in the whole UI is that ambient background wash.

### Typography

Loaded via `@font-face`: **Cabinetgrotesk** (headings) and **Uncutsans** (body). Computed scale (desktop, from the style guide page):

| Element | Size | Weight | Line-height | Family |
|---|---|---|---|---|
| H1 | 64px | 800 | 64px | Cabinetgrotesk |
| H2 | 48px | 700 | 48px | Cabinetgrotesk |
| H3 | 40px | 700 | 44px | Cabinetgrotesk |
| H4 | 32px | 700 | 35.2px | Cabinetgrotesk |
| H5 | 24px | 700 | 33.6px | Cabinetgrotesk |
| H6 | 20px | 700 | 28px | Cabinetgrotesk |
| Body (`p`) | 18px | 400 | 27px | Uncutsans |

Headings use tight/equal line-height to size (a common "display type" trick — H1/H2 literally have `line-height == font-size`), while body copy gets generous 1.5x leading for readability. This is a deliberate, consistent contrast between tight display type and airy body copy.

### Shape / spacing

`border-radius` values found across the stylesheet: `4px, 8px, 10px, 12px, 16px, 20px, 24px, 50px, 100px` — i.e. small radii for tags/badges, mid radii (16–24px) for cards, and near-full (`50px`/`100px`) for pills (buttons, nav bar, toggle chips). Everything reads as "soft/rounded," no sharp corners anywhere on the site.

## 4. Page-by-page content & structure

### Home (`/`)
1. **Nav** — floating pill bar (white, rounded-full, drop shadow) fixed over the gradient-blob background. Logo mark (circular "G" badge) + wordmark, 4 flat links (Info, Work, Service, Writing), a "Pages" dropdown (utility pages), and a solid-dark "Get in touch" pill CTA on the far right.
2. **Hero** — two-column: left = name/role headline ("I am Gabriel Bernard, a digital product designer.") + 2-sentence value prop + "Know myself" link; right = a large rounded-corner photo of the persona. Both halves sit inside their own soft-white rounded card floating over the blob background.
3. **Brand strip** — "WORKING WITH 30+ AMAZING BRAND" + a row of 7 grayscale partner-logo SVGs.
4. **Selected works** — 3 stacked full-width case-study rows, each: title + 2-sentence description + "Case study" pill button + 2 tag pills, paired with a large project screenshot/photo. Alternating-feel layout even though all 3 use the same left-text/right-image pattern.
5. **Services** — left: heading + "View all services" link; right: a vertical accordion-looking stack of 6 service names (Web design, UI design, Webflow development, Landing pages, Mobile app design, Design systems) with the active one visually emphasized (bold/dark) — reads as a subtle auto-cycling highlight rather than a real accordion.
6. **Process (3-step)** — "Understand → Ideate → Design," each a card with a paragraph description plus a row of small lowercase tag pills (e.g. "market research," "target audience") — same tag-pill primitive reused from the work cards.
7. **Testimonials** — "Happy clients from all over the 🌍 world" heading + a 2-up carousel of quote cards (prev/next circular arrow buttons), each with a large quotation-mark glyph, 2-sentence testimonial, and avatar + name + title.
8. **CTA band** — "Let's collaborate on your next project" + "Get in touch" button, persona photo bleeding in from the right, same blob-gradient background as hero.
9. **Footer** ("Connect") — a single big white rounded card containing: blurb + email + 4 social icons (Facebook, X, Behance, LinkedIn); a 2-column link list mixing real nav (Info/Work/Service/Writing/Contact) with utility-page links (Case study Details/Blog details/Style guide/License); and a newsletter email-capture input + Subscribe pill button. Copyright line + "Powered By Webflow" sit outside/below the card.

### About (`/about`)
Bio intro → "story of how I became a designer" narrative (2 paragraphs) → **Resume/CV** download link → work-experience list (3 roles, company/date/one-line description) → skills as two grouped lists (soft skills vs. tools, tools list includes an inconsistent/placeholder entry "Nation" and "Micro" — clearly unedited demo filler) → **3 animated stat counters** (7 years experience / 60+ clients / 100+ projects) rendered as an odometer-style rolling-digit animation (visible in the page text extraction as stacked digit sequences).

### Works (`/works`)
Same 3 case-study cards as the home page's "Selected works," plus a 4th ("Evano web SaaS solutions") not shown on home — so `/works` is the canonical full list and home only teases 3. Ends with the same brand-logo strip and a "Playground of visual exploration" teaser (likely a masonry/gallery section cut off in the crawl).

### Service (`/service`)
6 service cards (Website Audit, Brand Identity, Design strategy, Landing page, User Interface (UI), Development) each with a short pitch + 3 tag pills. Followed by an 8-question **FAQ accordion** (collaboration process, communication platform, turnaround time, working with other professionals, revision policy, on-site availability, pricing/packages, what info to provide) — generic freelancer-FAQ boilerplate, reused verbatim on `/pricing` and `/contact-us` too. Ends with the same CTA band + footer as home.

### Pricing (`/pricing`)
Only **2 tiers**, sold as service bundles rather than plans: "Strategic Consultation" (from $500, 9 line items) and "Design & Development" (from $750, 9 line items) — no monthly/subscription framing, matches a project-based freelance offer. Same FAQ accordion as `/service`.

### Case study detail (`/project/<slug>`, template shared by all 3 crawled slugs)
Structure: title/client/service/date meta row → large cover image → Introduction → Challenges (3 bullet points + 1 lead-in sentence) → Results (2 stat callouts, e.g. "48% Increased Engagement") → embedded client testimonial quote → Conclusion → "Next project" teaser card linking to the next case study. Note: the copy is internally inconsistent across the demo (e.g. the "Curology"-slugged page's body text is actually about a "GoalQuest Kids Interactive Visual Platform," and the client name "Alisha Joe" is tagged "VP @Banklo," matching a testimonial used elsewhere for "Oliver Brown") — confirms this is unedited Lorem-ipsum-style CMS demo content, not case-study copy to take at face value.

### Blog (`/blog`)
Featured post banner + category filter pills (Thinking beyond / AI & Creativity / Business talk / Inspiration / Behind the scene) + a 6-post grid (title, category tag, date). One post detail page crawled (`/post/thoughts-on-industries-and-the-impact-of-ai`) — presumably shares the same single-column article template as other CMS templates on the site (not fully explored).

### Contact (`/contact-us`)
"Have an idea? Let's talk." heading + a single-column intake form: Name, Email*, "When are you looking to start your project?"*, budget as **3 preset radio/pill options** (Under $1000 / $1000–$3000 / $5000+) rather than a free-text field, Details textarea*. Same FAQ accordion as `/service` and `/pricing` repeated below the form.

### Style guide (`/admin-pages/style-guide`)
Webflow's standard auto-generated reference page — typography scale (H1–H6 + paragraph + rich-text), presumably buttons/form-states/color swatches further down (not fully scrolled). Useful as the template author's own documentation of the design system, but it's a generic Webflow scaffold page, not bespoke to this template.

## 5. Recurring UI patterns worth naming

- **Floating pill navbar** — white rounded-full bar with shadow, detached from the viewport edge (not full-width), sits on top of the blob-gradient page background.
- **Tag pill primitive** — small rounded-full outlined chips used everywhere: skill tags, work-card metadata, process-step keywords, service line items, blog categories. One visual language reused across ~6 different content types.
- **Card-on-wash layering** — every section is a solid white/near-white rounded card floating over the same 4-corner blob-gradient background image that never changes across routes — the background is effectively site chrome, not per-page content.
- **CMS template reuse** — case studies and (likely) blog posts are one Webflow Collection template each; content differences are data, not markup, which is why the demo copy has visible mismatches (client names/testimonials swapped between items).
- **Boilerplate FAQ block** — the exact same 8 Q&As are reused verbatim on `/service`, `/pricing`, and `/contact-us` — a template shortcut rather than page-specific content.
- **No brand accent color** — visual interest comes entirely from photography + the ambient corner-blob wash + rounded shapes; UI chrome (buttons, links, active states) stays monochrome (near-black/gray). This is a fairly different approach from this portfolio's own navy+teal accent-driven system.

## 6. Known demo-content quirks (don't copy literally)

- Skills list on `/about` includes placeholder-looking tool names ("Nation," "Micro") — likely unedited Lorem Ipsum stand-ins for real tool logos/names.
- All 3 case-study URLs contain "curology" (a skincare brand) in the slug despite the on-page content being about unrelated SaaS/e-commerce projects — leftover slug from an earlier template version.
- Testimonial quote/name pairs repeat identically in multiple places (home page carousel and inside a case study) with the person's name swapped — confirms testimonials are generic filler, not tied to real clients.
