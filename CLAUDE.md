# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Install dependencies: `pnpm install`
- Start local dev server: `pnpm dev`
- Build production bundle: `pnpm build`
- Lint: `pnpm lint`
- Preview production build locally: `pnpm preview`

## Validation

- There is no test framework configured in `package.json` yet.
- For code changes, use `pnpm lint` and `pnpm build` as the main validation steps.
- There is no single-test command because no unit/e2e test runner is set up in this repo.

## Stack and deployment

- Vite + React 19 SPA with `react-router-dom` 7.
- Tailwind CSS 4 is enabled through `src/index.css` via `@import "tailwindcss"`; PostCSS uses `@tailwindcss/postcss`.
- Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`: pushes to `main` build with pnpm on Node 20 and deploy `dist/` to GitHub Pages.

## High-level architecture

- App entry is `src/main.jsx`, which mounts `src/App.jsx`.
- Routing is centralized in `src/App.jsx` using `BrowserRouter` with `basename="/openclaw-guide"`.
- Vite is also configured with `base: '/openclaw-guide/'` in `vite.config.js` for GitHub Pages.
- GitHub Pages SPA fallback is implemented with `public/404.html` and restoration logic in `index.html` using `sessionStorage`. If routes or deploy base paths change, update all three together:
  - `src/App.jsx`
  - `vite.config.js`
  - `public/404.html` / `index.html`

## Content structure

- This site is mostly a content-driven marketing/docs SPA, not a data-heavy app.
- Top-level pages live in `src/pages/`:
  - `Home.jsx`: landing page, hero, stats wall, timeline, feature/capability sections.
  - `Guide.jsx`: static quick-start and resource content.
  - `Articles.jsx`: article-card listing.
  - `SkillArticle.jsx`: long-form article page selected by route param.
  - `Feedback.jsx`: support/contact page.
- Reusable UI pieces live in `src/components/`:
  - `Navbar.jsx`: responsive nav with mobile menu state.
  - `Timeline.jsx`: animated timeline driven by a local array.
  - `Capabilities.jsx`: capability and use-case grids driven by local arrays.
  - `CodeBlock.jsx`: copyable code snippet component used in article content.

## Common change patterns

- Add a top-level page:
  - create/update the page under `src/pages/`
  - register the route in `src/App.jsx`
  - add/update navigation in `src/components/Navbar.jsx` if it should be visible in the main nav
- Add a new article:
  - add the card metadata in `src/pages/Articles.jsx`
  - add the matching `id` metadata and article body in `src/pages/SkillArticle.jsx`
- Change repository/deployment identity:
  - `dingclaw/openclaw-guide` is hardcoded in `src/pages/Home.jsx` for GitHub API stats
  - `/openclaw-guide` is hardcoded for GitHub Pages routing in `src/App.jsx`, `vite.config.js`, `public/404.html`, and `index.html`

## Data patterns

- Most page content is hardcoded in local arrays/objects inside the page/component files rather than stored in separate JSON/Markdown/CMS sources.
- The article system is minimal:
  - `src/pages/Articles.jsx` defines the card list.
  - `src/pages/SkillArticle.jsx` maps `:id` to article metadata and contains the full rendered article body.
- If adding a new article, update both files so the list entry and routed detail page stay in sync.

## Runtime integrations

- `src/pages/Home.jsx` fetches GitHub API data client-side to display latest update time, deploy count, and commit count for `dingclaw/openclaw-guide`.
- `index.html` loads the Busuanzi pageview counter script, and the footer in `Home.jsx` expects the `busuanzi_*` DOM IDs.
- Because stats are fetched in the browser, UI work on `Home.jsx` should preserve reasonable fallbacks for GitHub API failures.

## Repo-specific notes

- Prefer `pnpm` over npm/yarn in this repo because both the lockfile and CI use pnpm.
- `src/index.css` is the active global stylesheet entry. `src/App.css` appears to be leftover Vite starter CSS and is not imported by the app.
- The root `README.md` is not a standard developer README; it is an AI handoff note that points to an external Feishu doc for broader project context.