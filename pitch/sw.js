/* Slicio pitch offline cache. Scope: this folder only (the pitch page and its assets). Written by docs/pitch/build_deck.py. */
const VERSION = '178d9f063a';
const CACHE = 'slicio-pitch-' + VERSION;
const ASSETS = [
"./",
"index.html",
"assets/app/crust-club.webp",
"assets/app/plus-one.webp",
"assets/app/slice-detail.webp",
"assets/app/taste-rating.webp",
"assets/app/this-week.webp",
"assets/app/vote.webp",
"assets/fonts/big-shoulders-display.woff2",
"assets/fonts/figtree.woff2",
"assets/img/pattern-red.webp",
"assets/img/pattern-white.webp",
"assets/img/site-rewards.webp",
"assets/logo/horizontal-red-1024.webp",
"assets/logo/horizontal-white-1024.webp",
"assets/logo/icon-red-1024.webp",
"assets/logo/stacked-white-1024.webp",
"assets/music.mp3",
"assets/print/cup.webp",
"assets/print/lid-sticker.webp",
"assets/print/sauce-labels.webp",
"assets/print/tasting-card.webp",
"assets/qr/app.svg",
"assets/qr/site.svg",
"assets/renders/slice-box-closed.webp",
"assets/renders/slice-box-open.webp",
"assets/renders/slice-box-solo.webp",
"assets/renders/storefront.webp",
"assets/slices/buffalo-chicken.svg",
"assets/slices/nutella.svg",
"assets/slices/og-cheese.svg",
"assets/slices/og-pepperoni.svg",
"assets/slices/sotm.svg",
"assets/slices/style-al-taglio.svg",
"assets/slices/style-bar-pie.svg",
"assets/slices/style-california.svg",
"assets/slices/style-deep-dish.svg",
"assets/slices/style-detroit.svg",
"assets/slices/style-double-decker.svg",
"assets/slices/style-grandma.svg",
"assets/slices/style-neapolitan.svg",
"assets/slices/style-new-haven.svg",
"assets/slices/style-ny.svg",
"assets/slices/style-ohio-valley.svg",
"assets/slices/style-old-forge.svg",
"assets/slices/style-pan.svg",
"assets/slices/style-pinsa.svg",
"assets/slices/style-quad-city.svg",
"assets/slices/style-roman-tonda.svg",
"assets/slices/style-st-louis.svg",
"assets/slices/style-stuffed.svg",
"assets/slices/style-tavern.svg",
"assets/slices/style-trenton.svg",
"assets/team/christian.webp",
"assets/team/connor.webp",
"assets/team/logan.webp",
"assets/team/nino.webp",
"assets/voice.mp3"
];
const SCOPE_PATH = new URL('./', self.location).pathname;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('slicio-pitch-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function rangeFrom(resp, rangeHeader) {
  const m = /bytes=(\d*)-(\d*)/.exec(rangeHeader || '');
  if (!m) return Promise.resolve(resp);
  return resp.arrayBuffer().then((buf) => {
    const size = buf.byteLength;
    const start = m[1] === '' ? Math.max(0, size - parseInt(m[2], 10)) : parseInt(m[1], 10);
    const end = m[1] !== '' && m[2] !== '' ? Math.min(parseInt(m[2], 10), size - 1) : size - 1;
    return new Response(buf.slice(start, end + 1), {
      status: 206,
      statusText: 'Partial Content',
      headers: { 'Content-Type': resp.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': 'bytes ' + start + '-' + end + '/' + size, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes' }
    });
  });
}

function networkFirst(req) {
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('slow')), 4000));
  return Promise.race([fetch(req), timeout])
    .then((resp) => {
      if (resp && resp.ok) { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put('index.html', copy)); }
      return resp;
    })
    .catch(() => caches.match('index.html').then((r) => r || caches.match('./')));
}

function cacheFirst(req) {
  return caches.match(req, { ignoreSearch: true }).then((hit) => {
    if (hit) return req.headers.get('range') ? rangeFrom(hit, req.headers.get('range')) : hit;
    return fetch(req).then((resp) => {
      if (resp && resp.ok && resp.status === 200 && !req.headers.get('range')) { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return resp;
    });
  });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(SCOPE_PATH)) return;
  if (url.pathname.endsWith('/sw.js')) return;
  const isPage = req.mode === 'navigate' || url.pathname === SCOPE_PATH || url.pathname.endsWith('/index.html');
  e.respondWith(isPage ? networkFirst(req) : cacheFirst(req));
});
