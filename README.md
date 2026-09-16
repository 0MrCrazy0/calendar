# Simple Calendar v32

PWA calendar. Notes stay on the device. **Closed-app reminders** use a **Cloudflare Worker** you paste in the dashboard (**no Wrangler, no Node server**).

v32 is a **reliability** release: a timed event must not silently miss because the app was closed, the URL pointed at GitHub Pages, or a failed push was dropped.

## Setup
Follow **[DASHBOARD.md](./DASHBOARD.md)** (clicks + **no alert on phone** checklist).

| File | Where |
|------|--------|
| `index.html` `sw.js` `manifest.json` | GitHub Pages / any HTTPS host |
| `cloudflare-worker.dashboard.js` | Cloudflare Worker (paste) |
| `DASHBOARD.md` | setup + troubleshooting |

In the app, Closed-app server URL **must** be `https://<worker>.<subdomain>.workers.dev`.  
On the phone, confirm `https://WORKER/api/health` returns `ok: true`.

## What v32 changes
- Refuses same-origin Pages as the push server; health-checks `runtime` contains `worker`.
- **Awaits** sync on every event save / delete / complete / snooze (“Queued on server”).
- Push fires at **event time** (optional lead minutes, default 0). Unsent items kept **10 minutes** after `fireAt`.
- Worker **retries** failed sends; deletes only after HTTP 200/201/204 or gone 404/410.
- Immediate send if due in ≤15s; client also POSTs `/api/tick`.
- Resubscribes if VAPID keys changed.
- **Push doctor** + status: reachable / last error / N queued / next fire.
- iOS Home Screen warning.

## Honest limits
Web Push cannot play a custom looping alarm after the OS kills the app — OS notification only. Cron ~1 minute. iOS 16.4+ Home Screen. Worker must stay deployed.

## License
MIT — see `LICENSE`.
