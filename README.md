# samiolavuo.com

MVP website for **Sami Olavuo** — Revenue & Pricing Performance Consulting.

Next.js 15 · TypeScript · Tailwind CSS · static export for **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build (static export)

```bash
npm run build
```

Output: `out/` (includes `.nojekyll` and `CNAME` from `public/`).

## GitHub Pages deployment

The site deploys automatically on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-time GitHub setup

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from branch” with `/` on main — the built site lives in the Actions artifact)
3. Wait for the workflow **Deploy to GitHub Pages** to finish (Actions tab)
4. Optional custom domain:
   - **Pages** → **Custom domain** → `www.samiolavuo.com`
   - DNS at your registrar:
     - `CNAME` record: `www` → `<username>.github.io` (GitHub shows the exact target)
     - Apex `samiolavuo.com`: use GitHub’s A records or redirect apex → www
   - `public/CNAME` already contains `www.samiolavuo.com`

### Project site (no custom domain)

If you serve from `https://<user>.github.io/website/` instead of a custom domain, set in the workflow build step:

```yaml
NEXT_PUBLIC_BASE_PATH: "/website"
```

(replace `website` with your repo name), then rebuild.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/services/` | Services |
| `/revenue-leakage-audit/` | Method |
| `/hospitality-revenue-performance/` | Hospitality |
| `/b2b-pricing-profitability/` | B2B |
| `/ecommerce-pricing-optimization/` | Ecommerce |
| `/about/` | About |
| `/contact/` | Contact (MVP form) |

## Legacy

Previous Finnish static HTML site: `legacy/static-site/`

## Contact form

Placeholder only — see `TODO` in `components/ContactForm.tsx` to wire Formspree, Netlify Forms, or an API.
