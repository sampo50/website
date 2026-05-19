# samiolavuo.com

Kaupallinen hinnoitteluportfolio: Pricing Audit, Pricing Sprint, Revenue Performance Audit, resurssit ja blogi.

## Paikallinen esikatselu

```bash
python3 -m http.server 8080
```

Avaa http://localhost:8080

## Rakenne

- `/` — Hinnoittelun portfolio ja diagnostiikka-CTA
- `/pricing-audit/` — Pricing Audit (+ coworking, margin)
- `/pricing-sprint/` — Pricing Sprint (+ saas, value-based-pricing)
- `/revenue-performance-audit/` — Hospitality / flexible living
- `/resources/` — Työkalut (tulossa)
- `/blog/` — Artikkelit
- `/about/` — Kuka
- `/contact/` — Yhteystiedot

## Diagnostiikka

Painike `data-diagnostic-open` avaa 3-vaiheisen modalin.

- **Logiikka:** `assets/js/pricingDiagnostic.js` → `getRecommendation(industry, size, pain)`
- **UI:** `assets/js/diagnostic.js`
- **TS-lähde (tuleva build):** `src/lib/pricingDiagnostic.ts`

Testit (vaatii Node):

```bash
node assets/js/pricingDiagnostic.test.js
```

## Julkaisu

Push `main` → GitHub Pages (root). Domain: samiolavuo.com.
