# samiolavuo.com

A simple, fast, and responsive personal portfolio for Data Analyst work.

## Local preview

Use any static server. Examples:

```bash
# Python 3
python3 -m http.server 8080
# or Node.js
npx serve -l 8080
```

Then open `http://localhost:8080`.

## Structure

- `index.html`: Main page with About, Projects, Skills, Contact
- `assets/css/styles.css`: Styles
- `assets/js/main.js`: Small enhancements (mobile nav, smooth scroll)
- `assets/img/`: Images, favicons, social preview
- `sitemap.xml`: Sitemap for SEO

## Customize

- Edit text in `index.html` (hero, sections, links)
- Replace images in `assets/img/` (add `favicon.ico`, `og-image.png`)
- Tweak colors in `:root` within `assets/css/styles.css`

## Deploy

Any static host works:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

For GitHub Pages (project site):
1. Commit and push to `main`
2. In repo Settings → Pages → Build from branch → `main`/`root`

For custom domain `samiolavuo.com`, configure DNS to your host and add domain in host settings. 