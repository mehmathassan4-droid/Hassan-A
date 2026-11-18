// MHA Version 47 service worker: GitHub Pages project-path safe.
const MHA_SW_VERSION = 'mha-supabasev46';
const BASE_URL = new URL('./', self.registration.scope);
const SHELL_PATHS = ['', 'index.html', 'app.js?v=45', 'supabase-adapter.js?v=45', 'manifest.webmanifest?v=45', 'icon-32.png', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const SHELL_URLS = SHELL_PATHS.map(path => new URL(path, BASE_URL).href);
const EXTERNAL_LIBS = ['https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(MHA_SW_VERSION);
    await Promise.all(SHELL_URLS.map(async url => { try { const r = await fetch(url, {cache:'reload'}); if (r.ok) await cache.put(url, r); } catch (_) {} }));
    await Promise.all(EXTERNAL_LIBS.map(async url => { try { const r = await fetch(url, {mode:'cors', cache:'reload'}); if (r.ok) await cache.put(url, r); } catch (_) {} }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => (k.startsWith('mha-project2-') || k.startsWith('mha-supabase-v')) && k !== MHA_SW_VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const basePath = new URL(BASE_URL).pathname;
  const sameOrigin = url.origin === self.location.origin;
  const insideBase = sameOrigin && url.pathname.startsWith(basePath);
  const shellRequest = insideBase && (url.pathname === basePath || /\.(html|js|webmanifest|png)$/.test(url.pathname));
  const supabaseLibRequest = url.hostname === 'cdn.jsdelivr.net' && url.pathname.includes('/@supabase/supabase-js');
  if (!shellRequest && !supabaseLibRequest) return;
  event.respondWith((async () => {
    const cache = await caches.open(MHA_SW_VERSION);
    try {
      const fresh = await fetch(event.request);
      if (fresh && fresh.ok) cache.put(event.request, fresh.clone()).catch(() => {});
      return fresh;
    } catch (_) {
      const cached = await cache.match(event.request, {ignoreSearch:true}) || await cache.match(url.href);
      if (cached) return cached;
      if (insideBase && (url.pathname === basePath || url.pathname.endsWith('.html'))) return (await cache.match(new URL('index.html', BASE_URL).href)) || Response.error();
      return Response.error();
    }
  })());
});
