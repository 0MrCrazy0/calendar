/* Simple Calendar service worker v36 – cache, push, notificationclick */
const CACHE_NAME = 'calendar-v36';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  // Never cache API / push-related calls
  if (url.includes('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  if (url.includes('index.html') || url.includes('sw.js') || url.includes('manifest.json')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});

/** Closed-app / background alerts from the companion (Cloudflare Worker or local Node) */
self.addEventListener('push', event => {
  let payload = {
    title: 'Calendar reminder',
    body: 'You have an upcoming event',
    tag: 'cal-push',
    url: './index.html',
    data: {}
  };
  try {
    if (event.data) {
      const parsed = event.data.json();
      payload = Object.assign(payload, parsed || {});
    }
  } catch (_) {
    try {
      const text = event.data && event.data.text();
      if (text) payload.body = text;
    } catch (__) {}
  }

  const options = {
    body: payload.body || '',
    icon: payload.icon || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%236c5ce7'/%3E%3Ctext y='.9em' font-size='70' x='50%25' text-anchor='middle' fill='white'%3E📅%3C/text%3E%3C/svg%3E",
    badge: payload.badge || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%236c5ce7'/%3E%3Ctext y='.9em' font-size='70' x='50%25' text-anchor='middle' fill='white'%3E📅%3C/text%3E%3C/svg%3E",
    tag: payload.tag || 'cal-push',
    vibrate: [160, 80, 160],
    requireInteraction: true,
    data: Object.assign({ url: payload.url || './index.html' }, payload.data || {})
  };

  event.waitUntil(self.registration.showNotification(payload.title || 'Calendar', options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const rawUrl = (event.notification.data && event.notification.data.url) || './index.html';
  const targetUrl = new URL(rawUrl, self.location.href).href;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        try {
          const clientUrl = new URL(client.url);
          const target = new URL(targetUrl);
          if (clientUrl.origin === target.origin && 'focus' in client) {
            if (client.navigate) {
              return client.navigate(targetUrl).then(c => (c && c.focus ? c.focus() : client.focus()));
            }
            return client.focus();
          }
        } catch (_) {}
      }
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })
  );
});

self.addEventListener('pushsubscriptionchange', event => {
  event.waitUntil(Promise.resolve());
});
