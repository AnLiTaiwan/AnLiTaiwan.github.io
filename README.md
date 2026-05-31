# an-li.tw — An Li's Personal Site

Personal portfolio of **An Li**, QA Lead & Automation Engineer (Taiwan, based in Tokyo).

🔗 Live: **https://an-li.tw**

A static, dependency-free site hosted on **GitHub Pages**. Every push to `master`
is auto-deployed via the workflow in [`.github/workflows/jekyll-gh-pages.yml`](.github/workflows/jekyll-gh-pages.yml).
The custom domain is configured through [`CNAME`](CNAME).

## Two editions

The site ships with two interchangeable front-ends that share the same content:

| Edition | Entry point | Description |
|---------|-------------|-------------|
| **Classic** | [`index.html`](index.html) | Standard portfolio: Hero · About · Experience · Projects · Contact |
| **Terminal** | [`terminal.html`](terminal.html) | A terminal-themed take on the same résumé, driven by [`terminal-site.js`](terminal-site.js) |

You can jump from the classic homepage into the terminal edition via the "Hello World" link in the hero.

## Where the content comes from (data source)

There is **no CMS, database, or build step** — content is plain data baked into the repo:

- **Portfolio copy** (hero, about, experience, projects, writing, contact, 404) is held in
  the `window.I18N` object, with **three languages**: English (default), Japanese (`ja`),
  Traditional Chinese (`zh`). The page renders the right one at runtime via `data-i18n` attributes.
  Each edition has its **own** copy of this data file, so edit the one for the edition you mean:
  - Classic homepage → [`js/i18n-data.js`](js/i18n-data.js)
  - Terminal edition → [`shared/i18n-data.js`](shared/i18n-data.js) (+ `shared/common.js`)
  **To change text on the classic site, edit `js/i18n-data.js`.**
- **Terminal edition content** (the virtual `about.md` / `experience.json` / `projects.ts`
  you see in the terminal) is embedded directly in [`terminal-site.js`](terminal-site.js).
- **Writing / blog posts** are standalone pages under [`blog/`](blog/); each is also listed
  in the Writing section of the homepage (rendered from the `writing` block in `js/i18n-data.js`).
- **CV / résumé**: [`cv/Anli's Resume.pdf`](cv/) (also mirrored in `shared/`).
- The contact form posts through **EmailJS** (client-side, see `js/email.min-*.js`).

## Where to read the articles / project case studies

Posts and project write-ups are standalone pages under [`blog/`](blog/):

**Tech writing**

| Post | Page |
|------|------|
| When the test matrix has to cover the model (QA strategy for AI output) | https://an-li.tw/blog/test-matrix-meets-ai.html |

**Project case studies**

| Project | Page |
|---------|------|
| Citadels, multiplayer board-game adaptation | https://an-li.tw/blog/Citadels.html |
| CYCUEat, campus food-ordering web app | https://an-li.tw/blog/CYCUEat.html |
| Map Encyclopedia, interactive map knowledge archive | https://an-li.tw/blog/Datavisualization-MapEncyclopedia.html |
| Personal Health Education Management System | https://an-li.tw/blog/PersonalHealthEducationManagementSystem.html |

The posts are also listed in the **Writing** section of the homepage, and project
summaries in the **Projects** section (both rendered from `js/i18n-data.js`).

## Project structure

```
.
├── index.html              # Classic edition (homepage)
├── terminal.html           # Terminal edition
├── terminal-site.js        # Terminal edition logic + embedded content
├── 404.html                # Custom not-found page
├── CNAME                   # Custom domain: an-li.tw
├── blog/                   # Project case-study pages
├── cv/                     # Résumé PDF
├── shared/
│   ├── i18n-data.js        # ← all site copy (EN / JA / ZH)
│   ├── common.js           # Shared rendering / i18n logic
│   └── ...                 # Shared assets (logo, hero bg, résumé)
├── css/  js/  fonts/  images/   # Static assets (from the base theme)
└── .github/workflows/      # GitHub Pages deploy
```

## Local preview

It's pure static HTML — just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## License

Personal project. Content © An Li. The underlying HTML theme is third-party.
