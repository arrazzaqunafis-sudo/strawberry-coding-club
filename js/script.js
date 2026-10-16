const header = document.querySelector("#site-header");
const hero = document.querySelector("#home");
const navigation = document.querySelector("#primary-navigation");
const navigationToggle = document.querySelector("#navbar-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem("ciamis-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
  );
  themeToggle.innerHTML = `<i data-feather="${isDark ? "sun" : "moon"}" aria-hidden="true"></i>`;
  themeColor.setAttribute("content", isDark ? "#17121a" : "#fbf5e9");

  if (window.feather) {
    window.feather.replace();
  }
};

applyTheme(savedTheme || (systemPrefersDark.matches ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("ciamis-theme", nextTheme);
  applyTheme(nextTheme);
});

systemPrefersDark.addEventListener("change", (event) => {
  if (!localStorage.getItem("ciamis-theme")) {
    applyTheme(event.matches ? "dark" : "light");
  }
});

// Keep the header transparent while it overlaps the hero section.
const updateHeaderAppearance = () => {
  const heroBottom = hero.getBoundingClientRect().bottom;
  header.classList.toggle(
    "is-over-hero",
    heroBottom > header.offsetHeight,
  );
};

updateHeaderAppearance();
window.addEventListener("scroll", updateHeaderAppearance, { passive: true });
window.addEventListener("resize", updateHeaderAppearance);

// Toggle the mobile navigation and keep its accessibility state in sync.
navigationToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  navigationToggle.setAttribute("aria-expanded", String(isOpen));
  navigationToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup navigasi" : "Buka navigasi",
  );
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navigation.classList.remove("is-open");
    navigationToggle.setAttribute("aria-expanded", "false");
    navigationToggle.setAttribute("aria-label", "Buka navigasi");
  }
});

// Replace Feather icon placeholders when the library is available.
if (window.feather) {
  window.feather.replace();
}
