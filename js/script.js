const header = document.querySelector("#site-header");
const hero = document.querySelector("#home");
const navigation = document.querySelector("#primary-navigation");
const navigationToggle = document.querySelector("#navbar-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem("ciamis-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

// Use the glass header while the hero fills the area under the fixed navbar.
const updateHeaderAppearance = () => {
  const heroIsBehindHeader = window.scrollY + header.offsetHeight < hero.offsetHeight;
  header.classList.toggle("is-over-hero", heroIsBehindHeader);
  header.classList.toggle("scrolled", window.scrollY > 50);
};

updateHeaderAppearance();
window.addEventListener("scroll", updateHeaderAppearance, { passive: true });
window.addEventListener("resize", updateHeaderAppearance);

// Reveal sections as they enter the viewport and let the hero ease away on scroll.
const revealItems = document.querySelectorAll(
  "main > .section > .section__title, " +
  "main > .section > .map__intro, " +
  "main > .section > .about__row, " +
  "main > .section > .map__canvas, " +
  ".site-footer > .section > .section__title, " +
  ".site-footer > .section > .gallery__intro, " +
  ".site-footer > .section > .gallery__video, " +
  ".site-footer > .section > .credits p",
);

if (reducedMotion.matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  revealItems.forEach((item) => item.classList.add("scroll-reveal"));

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });

    revealItems.forEach((item) => sectionObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

let heroFramePending = false;
const updateHeroScrollEffect = () => {
  if (heroFramePending) return;
  heroFramePending = true;

  window.requestAnimationFrame(() => {
    const progress = reducedMotion.matches
      ? 0
      : Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)));
    hero.style.setProperty("--hero-content-opacity", String(1 - progress));
    hero.style.setProperty("--hero-content-offset", `${progress * -32}px`);
    hero.style.setProperty("--hero-video-scale", String(1 + progress * 0.08));
    heroFramePending = false;
  });
};

window.addEventListener("scroll", updateHeroScrollEffect, { passive: true });
window.addEventListener("resize", updateHeroScrollEffect);
reducedMotion.addEventListener("change", updateHeroScrollEffect);
updateHeroScrollEffect();

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

// Hilangkan Loading Screen saat web selesai dimuat
window.addEventListener("load", function() {
    const loader = document.getElementById("loading-screen");
    if(loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }
});

// Logika Scroll Reveal
window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
        // Hitung posisi elemen
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // Muncul saat 100px dari bawah layar
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
});
// Panggil sekali saat pertama kali load agar elemen teratas langsung muncul
window.dispatchEvent(new Event('scroll'));