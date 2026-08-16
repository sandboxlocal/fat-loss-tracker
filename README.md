# Personal Progress Tracker

A mobile-first, offline-capable fat-loss and progress tracking PWA designed for daily use from an iPhone Home Screen.

## Privacy architecture

The repository contains only generic application code. No personal targets, weights, measurements, notes, or tracking records are included. First-run setup and all subsequent records are stored in the browser's IndexedDB database on the device. There is no backend, account, analytics, telemetry, advertising, or data transmission.

Because the app is static, device-local storage is the privacy boundary. Clearing Safari website data or losing the device can remove records, so regular JSON exports are strongly recommended.

## Features

- First-run plan setup with editable targets
- Fast daily weight, calories, protein, steps, lifting, and notes log
- Configurable weekly calorie budget with remaining-per-day math
- Weekly-average weight trends and neutral pace summaries
- Biweekly body check-ins with arm and waist comparisons
- Versioned IndexedDB storage and validated JSON backup/restore
- Deliberate full-data reset
- Offline app shell and graceful service-worker updates
- iPhone safe-area-aware bottom navigation

## Structure

- `index.html` — application entry and PWA metadata
- `styles.css` — mobile-first visual system
- `app.js` — UI, forms, navigation, charts, and update handling
- `lib.js` — local-date and progress calculations
- `db.js` — versioned IndexedDB storage, export, and restore
- `service-worker.js` — updateable offline application shell
- `manifest.webmanifest` — install and standalone configuration
- `tests/` — calculation and date-boundary tests
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

## Run and test locally

```bash
python3 -m http.server 8080
node --test tests/calculations.test.js
```

Open `http://localhost:8080`. Service workers and installation are best verified on the deployed HTTPS URL.

## Deployments and data safety

Every push to `main` deploys the static files with GitHub Pages. Application code is cached separately from IndexedDB personal data, so routine deployments and service-worker cache upgrades do not erase tracking history. Storage schema changes must increment the IndexedDB version and implement migrations in `db.js`; existing store names and keys should not be casually renamed.

On iPhone, open the production URL in Safari, choose **Share**, then **Add to Home Screen**.
