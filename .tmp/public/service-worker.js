/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.0c9c5d397a6bc6fab1f5c4c8b09c602e.js"
);

workbox.core.setCacheNameDetails({prefix: "front-end"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/http:\/\/localhost:3000\//, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/http:\/\/localhost:3000\/design*/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/http:\/\/localhost:3000\/api*/, workbox.strategies.networkFirst(), 'GET');
