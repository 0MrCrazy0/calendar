# Simple Calendar v33

Closed-app Web Push via a **dashboard-pasted Cloudflare Worker** (no Wrangler, no Node server).

## Critical fix vs v32
v32 Worker **padded every push to ~4KB**. FCM/APNs often **reject** that → no alert when the app is closed.  
v33 uses **minimal aes128gcm padding** (`plaintext + 0x02` only) so payloads stay small.

Also: `/api/health` exposes `lastPush` (from KV `meta:lastPush`); `/api/tick` returns `lastErrors` so **Push doctor** can show why a send failed.

## Setup
1. Paste **`cloudflare-worker.dashboard.js`** into the Worker (replace old code) → Deploy.  
2. Upload PWA files (`index.html`, `sw.js`, `manifest.json`).  
3. Follow **[DASHBOARD.md](./DASHBOARD.md)** — set Worker URL, run **Push doctor**, confirm `sent>0` or read `lastErrors`.

## Files
| File | Where |
|------|--------|
| `index.html` `sw.js` `manifest.json` | Static HTTPS host |
| `cloudflare-worker.dashboard.js` | Cloudflare Worker paste |
| `DASHBOARD.md` | Click path + troubleshooting |

## License
MIT — see `LICENSE`.
