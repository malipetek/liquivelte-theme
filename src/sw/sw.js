import Workbox from 'workbox-sw';
import {registerRoute} from 'workbox-routing'

workbox.routing.registerRoute(
  /(https:\/\/cdn\.shopify\.com\/s\/files\/).*liquivelte.*\.(js|css)/,
  new workbox.strategies.StaleWhileRevalidate({
      cacheName: '3rd-cache',
      plugins: [
          new workbox.cacheableResponse.Plugin({
              statuses: [0, 200]
          })
      ]
  })
);
console.log('service worker included');
// @ts-ignore
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);