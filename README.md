# Fat Loss Tracker

A mobile-first Progressive Web App foundation for a personal fat-loss tracker. Version 1 is intentionally static: no backend, accounts, or database. Future tracking data will stay in browser storage on the device, with export/import backup added alongside the full application.

This repository currently contains only the deployment-ready PWA shell. The tracker itself has not been built yet.

## Structure

- `index.html` — minimal placeholder and iPhone/PWA metadata
- `styles.css` — small mobile-first placeholder stylesheet
- `app.js` — service-worker registration and connection status
- `manifest.webmanifest` — install/standalone configuration
- `service-worker.js` — offline application-shell caching
- `offline.html` — navigation fallback when offline
- `icons/` — application icon assets
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment

## Run locally

Service workers require HTTP rather than opening the HTML file directly. From the repository directory, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. To test installation and offline behavior most accurately, use the deployed HTTPS URL.

## GitHub Pages deployment

Every push to `main` starts the `Deploy to GitHub Pages` workflow. It uploads this static repository and publishes it with GitHub Pages. There is no build step and no generated output to commit.

In repository **Settings → Pages**, the source must be set to **GitHub Actions**. The first successful workflow run creates the public Pages URL. Later commits to `main` update it automatically.

## PWA notes

The manifest requests standalone display mode and uses relative URLs so the app works under a GitHub Pages project path. The service worker caches the small application shell after the first successful visit. On iPhone, open the deployed URL in Safari, choose **Share**, then **Add to Home Screen**.

When application work begins, update the service-worker cache name whenever cached shell files change. Device-local tracker records should be kept separate from the cache (for example, in IndexedDB) so deployments never overwrite personal data.
