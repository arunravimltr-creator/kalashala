# കലാശാല · Kalashala

UGC NET JRF academy — Paper I and Visual Art (79), English + Malayalam.

Progress stays on the device. No login.

## Install on your phone

This is a **Progressive Web App**. Open the live site in Chrome (Android) or Safari (iPhone):

1. Tap **Install on this device** inside Updates, or
2. Browser menu → **Install app** / **Add to Home Screen**.

Lessons and mocks work offline after the first visit. Official NTA notices need a network collect.

Repo: [github.com/arunravimltr-creator/kalashala](https://github.com/arunravimltr-creator/kalashala)

## Updates desk

**Collect updates** pulls official NTA / UGC PDFs with links:

- Registration / application
- Information bulletin
- Syllabus
- Admit card / exam city
- Question paper / response sheet
- Answer key
- Result / cut-off

The app also checks automatically **every 7 days**. A GitHub Action refreshes `public/nta-feed.json` every Monday.

Official source is always [ugcnet.nta.nic.in](https://ugcnet.nta.nic.in/). Kalashala does not replace NTA.

## Netlify

Import this GitHub repo in [Netlify](https://app.netlify.com). `netlify.toml` already has the build command. After the first deploy, that public URL is what you install to the Home Screen.
