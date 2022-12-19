import {precacheAndRoute} from 'workbox-precaching';

console.log('service worker included');
// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);