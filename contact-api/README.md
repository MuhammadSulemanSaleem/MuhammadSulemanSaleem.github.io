# Contact API

Standalone Vercel serverless function that powers the contact form on the main
portfolio site (which stays on GitHub Pages, unchanged). Deployed as its own
Vercel project with **Root Directory** set to `contact-api/`, so it lives in
this repo but ships independently from the static site.

## Endpoint

`POST /api/contact`

Body (JSON): `{ name, email, subject?, message, company? }`

- `company` is a honeypot field — leave it out of real form submissions; the
  contact form on the main site sends it as a hidden, empty input.
- Responds `{ ok: true }` on success, `{ error: string }` with a 4xx/5xx
  status otherwise.

CORS is restricted to `https://muhammadsulemansaleem.github.io` and
`http://localhost:4321` (see `ALLOWED_ORIGINS` in `api/contact.js`).

## Deployed instance

Live at `https://portfolio-contact-api-ecru.vercel.app/api/contact` (Vercel
project `portfolio-contact-api`, org `sunny-3379` — `-ecru` was auto-appended
since the plain name was taken). `../src/pages/contact/index.astro`'s
`CONTACT_ENDPOINT` constant points here. **Env vars (`GMAIL_USER` /
`GMAIL_APP_PASSWORD`) still need to be set** on the Vercel project before mail
actually sends — see Setup step 3 below.

## Setup

1. Enable 2-Step Verification on the sending Gmail account, then generate an
   [App Password](https://myaccount.google.com/apppasswords).
2. `vercel link` from this directory (or import the repo in the Vercel
   dashboard with Root Directory = `contact-api`).
3. Set environment variables on the Vercel project (Settings → Environment
   Variables), for Production + Preview:
   - `GMAIL_USER` — the sending Gmail address
   - `GMAIL_APP_PASSWORD` — the App Password from step 1 (not the account
     password)
4. `vercel deploy --prod` (or push — Vercel auto-deploys on push once linked).
5. If the project is ever redeployed under a different name/URL, update
   `CONTACT_ENDPOINT` in `../src/pages/contact/index.astro` to match, and keep
   `ALLOWED_ORIGINS` in `api/contact.js` in sync with the site's real origin.

## Local development

```bash
npm install
npx vercel dev
```

Requires `.env` (copy `.env.example`) with real credentials — never commit
`.env`.
