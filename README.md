# കലാശാല · Kalashala

UGC NET JRF academy — Paper I and Visual Art (79), English + Malayalam.

Progress stays on the device. No login.

## Install on your phone

GitHub builds this app and publishes it here:

**[https://arunravimltr-creator.github.io/kalashala/](https://arunravimltr-creator.github.io/kalashala/)**

1. Open that page in **Chrome** (Android) or **Safari** (iPhone).
2. Chrome menu → **Install app**. iPhone → Share → **Add to Home Screen**.

Lessons and mocks work offline after the first visit. Official NTA notices need a network collect.

Source: [github.com/arunravimltr-creator/kalashala](https://github.com/arunravimltr-creator/kalashala)

## Updates desk

**Collect updates** pulls official NTA / UGC PDFs with links:

- Registration / application
- Information bulletin
- Syllabus
- Admit card / exam city
- Question paper / response sheet
- Answer key
- Result / cut-off

The app also checks automatically **every 7 days**. A GitHub Action:

- refreshes `public/nta-feed.json` every Monday
- rebuilds the installable PWA whenever `main` changes

Official source is always [ugcnet.nta.nic.in](https://ugcnet.nta.nic.in/). Kalashala does not replace NTA.

## Netlify

Import this GitHub repo in [Netlify](https://app.netlify.com) if you want a second host. `netlify.toml` already has the build command. GitHub Pages is the default install URL.
