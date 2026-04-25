# Betriebshelfer — Landing Page Plan

A single-page, mobile-first marketing site for an AI automation service targeting Bavarian craft businesses. Clean, professional, no fluff.

## Design system

- **Primary:** dark navy / anthracite (`#0F1B2D`-ish) for headings, footer, dark sections
- **Accent:** deep teal (`#0D8B8B` range) for CTA buttons, numbers, highlights, links
- **Background:** clean white, with one soft neutral (light gray) for alternating sections
- **Typography:** Inter (modern sans-serif, excellent on mobile, free via Google Fonts)
- All colors wired into `index.css` + `tailwind.config.ts` as HSL tokens (no hardcoded colors in components)
- Generous spacing, large tap targets, no decorative animations — only subtle hover states and smooth scroll

## Page sections (single scroll)

1. **Sticky top bar** — "Betriebshelfer" wordmark left, "Erstgespräch anfragen" button right (scrolls to form). Collapses cleanly on mobile.
2. **Hero** — Big headline, supportive subheadline, primary teal CTA. Subtle background (navy gradient or off-white with accent line). Trust line below CTA: "Persönlich vor Ort in Bayern."
3. **Problem** — "Was Ihnen täglich Zeit kostet" — 3 cards with simple lucide icons (PhoneOff, FileText, Receipt), each with title + one-liner.
4. **Solution** — "Was wir konkret umsetzen" — 3 cards (Telefonagent, Angebotserstellung, Rechnungsstellung) with icons (PhoneCall, FileCheck2, Send). Slightly elevated cards on white.
5. **ROI** — Dark navy section. Large bold pull-quote with "1.440 €" highlighted in teal. Below: retainer line in lighter weight. Maximum visual contrast — this is the money slide.
6. **How it works** — "So läuft es ab" — 3 numbered steps in a horizontal row (stack on mobile). Big teal step numbers, short copy.
7. **Contact form** — Light gray section. Card-style form. Fields exactly as specified, with inline validation (required fields turn red on blur if empty, email/phone format checked). Submits to `https://formspree.io/f/mkokegpa` via fetch. Shows success/error toast + inline message. Submit button disables while sending.
8. **Footer** — Dark navy. Wordmark, tagline, email link (`mailto:info@betriebshelfer.org`), Impressum / Datenschutz links pointing to placeholder routes.

## Form behavior

- Built with shadcn `Form` + `react-hook-form` + `zod` for client-side validation (name non-empty, valid email, phone min 6 chars, branche + mitarbeiterzahl required, problem optional max 1000)
- Posts JSON to Formspree endpoint `https://formspree.io/f/mkokegpa` with `Accept: application/json`
- Success: green inline message "Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen." + form resets
- Error: red inline message "Etwas hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt." with mailto fallback link

## Routing

- `/` — main landing page
- `/impressum` — placeholder page with heading + "Inhalt folgt." (so footer links don't 404)
- `/datenschutz` — same pattern

## Technical

- React + Vite + Tailwind + shadcn (existing stack)
- Inter font loaded via `<link>` in `index.html`
- Smooth scroll via `html { scroll-behavior: smooth }` + section IDs (`#kontakt`, etc.)
- SEO: proper `<title>`, meta description, OG tags in `index.html`; semantic `<header>`/`<main>`/`<section>`/`<footer>` with one `<h1>` and `<h2>` per section
- `lang="de"` on `<html>`
- Fully responsive: 1 column mobile → 3 column grid from `md:` breakpoint up
- No backend, no auth, no database

## Deliverables

- Updated `index.html`, `index.css`, `tailwind.config.ts` with the design system
- New components: `Header`, `Hero`, `ProblemSection`, `SolutionSection`, `RoiSection`, `HowItWorks`, `ContactForm`, `Footer`
- Updated `Index.tsx` composing them
- New pages: `Impressum.tsx`, `Datenschutz.tsx`
- Routes added in `App.tsx`
