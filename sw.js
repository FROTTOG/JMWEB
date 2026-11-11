/*
 * JMWEB – service worker
 *
 * Síť má vždy přednost, takže se po nasazení nikdy neukáže zastaralá verze.
 * Cache slouží jen jako záloha, když je návštěvník offline.
 * Cesty jsou relativní – web funguje v kořeni domény i v podadresáři.
 */
const CACHE_NAME = 'jmweb-cache-v6';
const CORE = [
  './',
  'manifest.json',
  'favicon.svg',
  'assets/css/style.css?v=6.0.0',
  'assets/js/main.js?v=6.0.0',
  'assets/fonts/archivo-expanded-800.woff2',
  'assets/fonts/archivo-400-700.woff2',
  'assets/fonts/jetbrains-mono-400-600.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: true })
          .then(cached => cached || (request.mode === 'navigate' ? caches.match('./') : undefined))
          .then(cached => cached || Response.error())
      )
  );
});
