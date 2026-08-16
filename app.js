const status = document.querySelector("#connection-status");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      status.textContent = navigator.onLine ? "Offline support is ready." : "You are using the offline version.";
    } catch {
      status.textContent = "Offline support could not be started in this browser.";
    }
  });
} else {
  status.textContent = "This browser does not support offline installation.";
}

window.addEventListener("online", () => { status.textContent = "Back online."; });
window.addEventListener("offline", () => { status.textContent = "You are using the offline version."; });
