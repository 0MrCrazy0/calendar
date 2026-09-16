# Simple Calendar v31

Production pack: **GitHub** (PWA) + **Cloudflare Worker** (closed-app push).  
No local Node server. No Wrangler.

## Contents

| File | Upload where |
|------|----------------|
| `index.html` | GitHub / static host (Pages) |
| `sw.js` | same |
| `manifest.json` | same |
| `LICENSE` | same |
| `cloudflare-worker.dashboard.js` | Cloudflare Worker (paste in dashboard) |
| `DASHBOARD.md` | setup guide |
| `README.md` | this file |

## Quick setup
1. Push the four PWA files to GitHub and enable Pages (HTTPS).
2. Create a Worker → paste `cloudflare-worker.dashboard.js` → Deploy.
3. Secrets: `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`.
4. KV binding name exactly `REMINDERS`. Cron: `* * * * *`.
5. In the app, set closed-app reminder URL to `https://<worker>.<subdomain>.workers.dev`.

See `DASHBOARD.md` for the full click-path.
