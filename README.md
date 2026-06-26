# samiolavuo.com

MVP website for **Sami Olavuo** — Hospitality Revenue Performance (fractional revenue management for accommodation and serviced living operators).

Next.js 15 · TypeScript · Tailwind CSS · static export · **Cloudflare Pages** + **GitHub**.

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

Output: `out/` (static HTML, `_next` assets, `.nojekyll` from `public/`).

---

## Julkaisu: Cloudflare Pages + GitHub

Lähdekoodi on GitHubissa (`sampo50/website`). Julkaisu tapahtuu **Cloudflare Pages** -projektilla — DNS on jo Cloudflaressa, joten tämä korvaa GitHub Pages -julkaisun.

### 1. Luo Pages-projekti (kerran)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Valitse GitHub → repo **`sampo50/website`**
3. **Production branch:** `main`
4. **Build settings:**

   | Asetus | Arvo |
   |--------|------|
   | Framework preset | `None` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` |

5. **Environment variables** (Production):

   | Name | Value |
   |------|--------|
   | `NODE_VERSION` | `20` |
   | `NEXT_PUBLIC_BASE_PATH` | *(tyhjä — älä aseta, jos domain on juuri `samiolavuo.com`)* |

6. **Save and Deploy** — odota vihreä build.

`wrangler.toml` ja `.nvmrc` vahvistavat saman output-kansion (`out`) repossa.

### 2. Custom domain

1. Pages-projekti → **Custom domains** → **Set up a custom domain**
2. Lisää **`samiolavuo.com`** (ja halutessa `www.samiolavuo.com` → redirect apexille)
3. DNS: Cloudflare hallitsee zonea — CNAME/flattening luodaan automaattisesti.

### 3. Poista vanha julkaisu (tärkeää)

Jos näet vielä **vanhan suomenkielisen** sivun:

- **Workers & Pages** → tarkista, ettei ole **toista** Pages-projektia, joka käyttää samaa domainia.
- **Caching** → **Configuration** → **Purge Everything** (kerran uuden deployn jälkeen).
- GitHubissa: **Settings → Pages** → poista custom domain / poista käytöstä, jos GitHub Pages oli aiemmin päällä (ei enää tarvita).

### 4. Päivitykset

Jokainen **`git push` → `main`** laukaisee Cloudflare Pages -buildin automaattisesti (Git-integraatio).

Tarkista buildit: Cloudflare → projekti → **Deployments**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Etusivu |
| `/services/` | Palvelut |
| `/revenue-audit/` | Revenue Audit |
| `/fractional-revenue-manager/` | Fractional Revenue Manager |
| `/about/` | Tietoa |
| `/contact/` | Yhteystiedot (MVP-lomake) |

## Legacy

Previous Finnish static HTML site: `legacy/static-site/`

## Contact form

Placeholder only — see `TODO` in `components/ContactForm.tsx` to wire Formspree, Netlify Forms, or an API.
