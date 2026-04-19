# SecureWithQuan — Website

A modern, professional Next.js + Tailwind CSS website for SecureWithQuan LLC, a cybersecurity risk advisory for small businesses.

## Design approach

Editorial, trust-first aesthetic — not the typical "dark hacker" cybersecurity look. The goal was to feel like a confident independent advisor you'd actually want to call, not a corporate MSP or a security vendor.

- **Typography:** Fraunces (display serif, warm and authoritative) paired with Inter Tight (body) and JetBrains Mono (labels/eyebrows)
- **Palette:** Deep navy/ink on warm paper, with a muted gold accent for moments of emphasis
- **Layout:** 12-column editorial grid, generous whitespace, subtle background grid for texture
- **Motion:** Restrained — scroll-triggered nav state, hover transitions, gentle animated status dot

## Project structure

```
securewithquan/
├── app/
│   ├── globals.css        # Tailwind + custom styles (grid bg, noise, link underlines)
│   ├── layout.tsx         # Root layout, font loading (Fraunces, Inter Tight, JetBrains Mono)
│   └── page.tsx           # Assembles all sections
├── components/
│   ├── Icons.tsx          # 20 hand-built SVG icons
│   ├── Nav.tsx            # Sticky nav with scroll effect + mobile menu
│   ├── Hero.tsx           # Hero with sample-findings card, stats strip
│   ├── WhoItsFor.tsx      # Dark section, target-audience chips
│   ├── Services.tsx       # All 6 services, expandable accordion rows
│   ├── Process.tsx        # 4-step "what to expect"
│   ├── About.tsx          # Meet Quan + 4 operating principles
│   ├── Testimonials.tsx   # 6 small-business-owner testimonials
│   ├── FAQ.tsx            # 9 objection-handling Q&As
│   ├── Contact.tsx        # Working form UI + direct contact info
│   └── Footer.tsx         # Brand, links, contact, legal
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Customization checklist

Before going live, update these:

1. **Contact info** — search the codebase for:
   - `hello@securewithquan.com` (Contact.tsx, Footer.tsx)
   - `(555) 555-0123` (Contact.tsx, Footer.tsx)
   - `NYC metro area` (Contact.tsx, Footer.tsx) — change if you serve a different region

2. **Portrait** — `components/About.tsx` currently uses a stylized "Q" monogram placeholder. Replace the inner block with an `<Image>` component once you have a real headshot. Put the file in `/public/` and use Next.js's image component.

3. **Contact form backend** — the form in `components/Contact.tsx` is UI-only and just shows a success state. Wire it to your backend of choice (Formspree, Resend, a Next.js API route, etc.) by replacing the `handleSubmit` function.

4. **Testimonials** — the 6 testimonials in `components/Testimonials.tsx` are realistic placeholders. Replace with real client quotes (with permission) once you have them.

5. **Credentials** — the "Background" box in `components/About.tsx` has generic credential language. Swap in your actual certifications (CISSP, Security+, etc.) and any specifics you want to highlight.

6. **Metadata** — update title, description, and add Open Graph tags in `app/layout.tsx` for SEO and social sharing.

7. **Favicon** — drop a `favicon.ico` in `/public/`.

## Tech

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**
- **Google Fonts** via `next/font` (no external CSS requests)
- No external UI libraries — all icons are hand-built SVG

## Accessibility notes

- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<details>`, `<summary>`)
- Visible focus rings on all interactive elements
- `aria-expanded` on FAQ buttons
- `aria-label` on the mobile menu toggle
- Color contrast meets WCAG AA for body text
- Links have `link-underline` hover affordance, not just color
