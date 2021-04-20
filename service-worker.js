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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "203da0fb8783fa5dad3015c9583ee8db"
  },
  {
    "url": "API.html",
    "revision": "483dc458c5c9b0597719064e85605ef8"
  },
  {
    "url": "assets/css/0.styles.d298e7d4.css",
    "revision": "a9f716797a39868a2c924dbd8700c426"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.36ea21fb.js",
    "revision": "bdc8a3d476a7864cc06a60f6ac0d3e40"
  },
  {
    "url": "assets/js/11.2903950d.js",
    "revision": "8c3e36601975ebcad9cf6c23dbd346bc"
  },
  {
    "url": "assets/js/12.d2794380.js",
    "revision": "8553107168d8cc28351d7933d5e85bee"
  },
  {
    "url": "assets/js/2.eba207a4.js",
    "revision": "6188e751d9ea0a607e2c6d0e1ac2d1b1"
  },
  {
    "url": "assets/js/3.1b65837f.js",
    "revision": "fbf58b9ed28208c69a0dc9c6046051fb"
  },
  {
    "url": "assets/js/4.79e06109.js",
    "revision": "d3769e05c7a0efdfebe2179e2bb6e3f0"
  },
  {
    "url": "assets/js/5.ca660288.js",
    "revision": "d12cfe72b062e33b2e1f7293f7169cde"
  },
  {
    "url": "assets/js/6.2bbbe609.js",
    "revision": "4f68db966b2910d6f2b1bded1c4a787f"
  },
  {
    "url": "assets/js/7.017fe42c.js",
    "revision": "8e0ff14d7a8d14848bd51ff144b7e581"
  },
  {
    "url": "assets/js/8.eba7a5ce.js",
    "revision": "6bf7c8b09056c73baa563d00fb558e6f"
  },
  {
    "url": "assets/js/9.e4be22f3.js",
    "revision": "cda5b8c991343cae248ea3c12ebba021"
  },
  {
    "url": "assets/js/app.947df0d7.js",
    "revision": "105bcc5f71dbfe76ad699fe9f8c4dd51"
  },
  {
    "url": "EventType.html",
    "revision": "26d2529bf9d6044b3f7839cf5d5c8f85"
  },
  {
    "url": "Heartbeat.html",
    "revision": "6f7905497267728e7336ab577e6312aa"
  },
  {
    "url": "index.html",
    "revision": "eea695a301060589e948c02619539a23"
  },
  {
    "url": "MessageType.html",
    "revision": "de5684f82dde1d9adb045a489146ab38"
  },
  {
    "url": "Report.html",
    "revision": "4abf64fab8d42588a3c5604448cfca6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
