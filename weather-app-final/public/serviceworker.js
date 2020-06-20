/*

Documentation - MDN 
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

*/

const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install ServiceWorker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then(() => {
        return fetch(event.request);
      })
      .catch(() => caches.match("offline.html"))
  );
});

// Activate ServiceWorker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cachesNames) =>
      Promise.all(
        cachesNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
