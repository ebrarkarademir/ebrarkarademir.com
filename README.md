## Personal Page (Vue 3 + Vite + Tailwind CSS)

A simple personal website built with Vue 3, Vite, Vue Router, and Tailwind CSS.

### Prerequisites
- Node.js 18+ installed (includes npm)
- Git (optional, for cloning)

### Install
```powershell
npm ci
```

### Run (development)
Starts Vite dev server at http://localhost:5173/
```powershell
npm run dev
```

### Build (production)
Outputs static assets to `dist/`.
```powershell
npm run build
```

### Preview production build
Serves `dist/` locally at http://localhost:4173/ with the correct base path.
```powershell
npm run preview
```

Note: In preview/production the site is served under `/personal-page/` (see `vite.config.js` base). The full local preview URL is:
```
http://localhost:4173/personal-page/
```

### Deploy to GitHub Pages
This repo includes a convenience script to publish `dist/` to the `gh-pages` branch.
```powershell
npm run build
npm run deploy
```
Make sure the GitHub repository settings have Pages configured to use the `gh-pages` branch.

### Project structure
- `src/main.js` – App bootstrap
- `src/router.js` – Routes (uses HTML5 history)
- `src/App.vue` and `src/views/` – Components and views
- `src/style.css` – Tailwind entry
- `tailwind.config.js` / `postcss.config.js` – Tailwind + PostCSS config
- `vite.config.js` – Vite config, sets base for GitHub Pages

### Troubleshooting
- Vite not found: run `npm ci` to install dependencies.
- Tailwind config error about `module.exports`: this project uses ESM, so `tailwind.config.js` uses `export default`.
- Old browserslist data warning:
	```powershell
	npx update-browserslist-db@latest
	```
- Audit vulnerabilities (optional):
	```powershell
	npm audit fix
	```

### License
This project follows the license of the upstream repository. Refer to the repository's LICENSE if present.
