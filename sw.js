self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("fox-store").then(function (cache) {
      return cache.addAll([
        "/pwa-example/",
        "/pwa-example/index.html",
        "/pwa-example/index.js",
        "/pwa-example/style.css",
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
