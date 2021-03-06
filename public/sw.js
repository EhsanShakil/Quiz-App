let cacheData = "quizapp";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
