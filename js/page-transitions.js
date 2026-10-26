const transitionStateKey = "ciamis-page-transition";
const pendingTransition = sessionStorage.getItem(transitionStateKey);

if (pendingTransition) {
  sessionStorage.removeItem(transitionStateKey);
  document.body.classList.add(
    pendingTransition === "from-history" ? "returning-to-home" : "history-enter",
  );
}

window.addEventListener("pageshow", (event) => {
  if (!event.persisted) return;

  document.body.classList.remove("leaving-for-history", "leaving-for-home");
  const isHistoryPage = window.location.pathname.split("/").pop() === "sejarah.html";
  document.body.classList.add(isHistoryPage ? "history-enter" : "returning-to-home");
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (
    !link || event.defaultPrevented || event.button !== 0 || event.metaKey ||
    event.ctrlKey || event.shiftKey || event.altKey
  ) return;
  if (link.target || link.hasAttribute("download")) return;

  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin) return;

  const currentPage = window.location.pathname.split("/").pop();
  const nextPage = destination.pathname.split("/").pop();
  const goingToHistory = currentPage !== "sejarah.html" && nextPage === "sejarah.html";
  const returningHome = currentPage === "sejarah.html" && (nextPage === "index.html" || nextPage === "");
  if (!goingToHistory && !returningHome) return;

  event.preventDefault();
  sessionStorage.setItem(transitionStateKey, goingToHistory ? "from-home" : "from-history");
  document.body.classList.add(goingToHistory ? "leaving-for-history" : "leaving-for-home");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(() => window.location.assign(destination.href), reduceMotion ? 0 : 390);
});
