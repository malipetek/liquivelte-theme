importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js'
);

const precaching = workbox.precaching;
const routing = workbox.routing;
const strategies = workbox.strategies;
const cacheableResponse = workbox.cacheableResponse;

const registerRoute = routing.registerRoute;
const StaleWhileRevalidate = strategies.StaleWhileRevalidate;
const CacheableResponsePlugin = cacheableResponse.CacheableResponsePlugin;
registerRoute(
  /^(https:\/\/cdn\.shopify\.com\/s\/files\/).*liquivelte.*\.(js|css)$/,
  new StaleWhileRevalidate({
      cacheName: 'liquivelte-cache'
  })
);

registerRoute(
  ({ event, url }) => {
    const urls = ['/', '', '#'];
    console.log('message from service worker ', event.request.destination, url.pathname);
    return urls.includes(url.pathname) && event.request.destination === 'document';
  },
  new StaleWhileRevalidate({
      cacheName: 'html-cache'
  })
);

self.addEventListener('fetch', event => {
  debugger;
  if (event.request.url.endsWith('.jpg')) {

    event.respondWith(new StaleWhileRevalidate.handle({ request: event.request }));
  }
});

console.log('service worker included');
// @ts-ignore
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);