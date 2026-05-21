# samiolavuo.com

MVP website for **Sami Olavuo** — Revenue & Pricing Performance Consulting.

Built with Next.js 15, TypeScript, Tailwind CSS, and static export (no backend).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/` (suitable for GitHub Pages, Netlify, Vercel, etc.).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/services` | Service overview |
| `/revenue-leakage-audit` | Method |
| `/hospitality-revenue-performance` | Hospitality audit |
| `/b2b-pricing-profitability` | B2B audit |
| `/ecommerce-pricing-optimization` | Ecommerce sprint |
| `/about` | About |
| `/contact` | Contact form (MVP placeholder) |

## Legacy

The previous Finnish static HTML site is preserved in `legacy/static-site/`.

## Contact form

`components/ContactForm.tsx` is a client-side MVP: on submit it shows a success message and logs data in development only. Connect Formspree, Netlify Forms, or an API route where marked with `TODO`.
