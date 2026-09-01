/*
 * Self-unregistering service worker ("kill switch").
 *
 * This site does not use a service worker. This file exists because an earlier
 * project served from the same origin registered one, and a registration
 * outlives the app that created it — the browser keeps re-fetching /sw.js to
 * check for updates, forever, until it receives a worker that removes itself.
 *
 * Serving this makes that cleanup automatic for anyone still carrying a stale
 * registration, instead of requiring them to unregister by hand.
 *
 * Safe to delete once no clients are left holding an old registration.
 */

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister()

      // Drop anything the previous worker cached, so no stale asset survives it.
      const keys = await caches.keys()
      await Promise.all(keys.map(key => caches.delete(key)))
    })(),
  )
})
