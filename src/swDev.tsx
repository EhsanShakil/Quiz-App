export function swDev() {
  let url = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(url)
      .then(() => {
        console.log("Service Worker registered.");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
