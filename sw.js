self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("fox-store").then(function (cache) {
      return cache.addAll([
        "/pwa-examples/",
        "/pwa-examples/index.html",
        "/pwa-examples/index.js",
        "/pwa-examples/style.css",
        "/pwa-examples/images/fox1.jpg",
        "/pwa-examples/images/fox2.jpg",
        "/pwa-examples/images/fox3.jpg",
        "/pwa-examples/images/fox4.jpg",
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
