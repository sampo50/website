# samiolavuo.com

Revenue Performance Audit — B2B-konsultointisivusto hospitality- ja flexible living -operaattoreille.

## Paikallinen esikatselu

```bash
python3 -m http.server 8080
# tai
npx serve -l 8080
```

Avaa selaimessa: `http://localhost:8080`

## Rakenne

- `index.html` — päälanding (palvelu, prosessi, FAQ, CTA)
- `about.html` — yhteystiedot
- `assets/css/styles.css` — tyylit
- `assets/js/main.js` — mobiilinavigaatio, sujuva ankkuriscrollaus
- `sitemap.xml` — SEO-sivukartta

## Julkaisu (GitHub Pages)

1. Commitoi ja pushaa `main`-haaraan
2. Repo → Settings → Pages → Deploy from branch → `main` / root
3. Mukautettu domain `samiolavuo.com`: DNS osoittaa GitHub Pages -hostiin, domain lisätty Pages-asetuksiin

Muutokset näkyvät yleensä muutamassa minuutissa pushin jälkeen.
