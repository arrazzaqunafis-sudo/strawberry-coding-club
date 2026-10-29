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
  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
      );
      themeToggle.innerHTML = `<i data-feather="${isDark ? "sun" : "moon"}"></i>`;
    }

    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#17121a" : "#ffffff");
    }
  };

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
  const heroIsBehindHeader =
    hero && window.scrollY + header.offsetHeight < hero.offsetHeight;
  header.classList.toggle("is-over-hero", Boolean(heroIsBehindHeader));
  header.classList.toggle("scrolled", !hero || window.scrollY > 50);
};

updateHeaderAppearance();
window.addEventListener("scroll", updateHeaderAppearance, { passive: true });
window.addEventListener("resize", updateHeaderAppearance);

const mapCanvas = document.querySelector("#map");
if (mapCanvas && window.L && Array.isArray(window.lokasiCiamis)) {
  const map = window.L.map(mapCanvas).setView([-7.29, 108.36], 10);

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  const markerBounds = [];
  window.lokasiCiamis.forEach((lokasi) => {
    const markerIcon = window.L.divIcon({
      className: "map-pin-wrapper",
      html: `<span class="map-pin map-pin--${lokasi.jenis}"><span></span></span>`,
      iconSize: [28, 36],
      iconAnchor: [14, 34],
      popupAnchor: [0, -32],
    });
    const marker = window.L.marker(lokasi.koordinat, {
      icon: markerIcon,
    }).addTo(map);
    const [latitude, longitude] = lokasi.koordinat;
    const storyLink = Number.isInteger(lokasi.situsId)
      ? `<a href="sejarah.html?situs=${lokasi.situsId}">Baca kisah situs</a><br>`
      : "";
    const sourceLabel = lokasi.sumber.includes("openstreetmap.org")
      ? "Sumber OpenStreetMap"
      : "Buka titik di peta";
    marker.bindPopup(
      `<strong>${lokasi.nama}</strong><br>${lokasi.kategori}<br>` +
        `Koordinat terverifikasi: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}<br>` +
        storyLink +
        `<a href="${lokasi.sumber}" target="_blank" rel="noopener noreferrer">${sourceLabel}</a>`,
    );
    markerBounds.push(lokasi.koordinat);
  });
  map.fitBounds(markerBounds, { padding: [24, 24] });
  window.addEventListener("resize", () => map.invalidateSize());
}

const galleryContainer = document.querySelector("#galeri-sejarah");
if (galleryContainer && Array.isArray(window.lokasiCiamis)) {
  const galeriSejarah = [
    {
      id: 0,
      judul: "Situs Bojong Galuh Karangkamulyan",
      gambar: "./jpg/ciungwanara/ciungwanara.jpg",
      kategori: "Situs sejarah",
    },
    {
      id: 1,
      judul: "Situs Astana Gede Kawali",
      gambar: "./jpg/astana-gede-kawali/astana-gede-kawali.jpeg",
      kategori: "Peninggalan Kerajaan Sunda",
    },
    {
      id: 2,
      judul: "Situs Jambansari",
      gambar: "./jpg/situs-jambansari/situs-jambansari.jpg",
      kategori: "Cagar budaya",
    },
    {
      id: 3,
      judul: "Situs Gunung Susuru",
      gambar: "./jpg/situs-Gunung-Susuru/situs-Gunung-Susuru.jpg",
      kategori: "Situs arkeologi",
    },
    {
      id: 4,
      judul: "Situs Batu Panjang",
      gambar: "./jpg/situs-Batu-Panjang/situs-Batu-Panjang.jpg",
      kategori: "Warisan megalitik",
    },
    {
      id: 5,
      judul: "Kampung Adat Kuta",
      gambar: "./jpg/kampung-adat-kuta/kampung-adat-kuta.jpg",
      kategori: "Kearifan lokal",
    },
    {
      id: 6,
      judul: "Situs Samida",
      gambar: "./jpg/situs-samida/situs-samida.jpg",
      kategori: "Situs sejarah",
    },
    {
      id: 7,
      judul: "Situs Geger Emas",
      gambar: "./jpg/situs-Geger-Emas/situs-Geger-Emas.jpg",
      kategori: "Situs sejarah",
    },
    {
      id: 8,
      judul: "Situs Piktograf Citapen",
      gambar: "./jpg/situs-Piktograf-Citapen/situs-Piktograf-Citapen.jpg",
      kategori: "Situs arkeologi",
    },
    {
      id: 9,
      judul: "Situs Galuh Salawe",
      gambar: "./jpg/situs-Galuh-Salawe/situs-Galuh-Salawe.jpg",
      kategori: "Warisan Kerajaan Galuh",
    },
    {
      id: 10,
      judul: "Situs Gandoang Wanasigra",
      gambar: "./jpg/situs-Gandoang-Wanasigra/situs-Gandoang-Wanasigra.jpg",
      kategori: "Situs sejarah",
    },
    {
      id: 11,
      judul: "Pendopo Kabupaten Ciamis",
      gambar: "./jpg/gedung/gedung.jpg",
      kategori: "Bangunan bersejarah",
    },
  ];

  galleryContainer.innerHTML = galeriSejarah
    .map(
      (item, index) => `
    <a class="gallery-card${index === 0 ? " gallery-card--featured" : ""}" href="sejarah.html?situs=${item.id}" aria-label="Baca sejarah ${item.judul}">
      <img src="${item.gambar}" alt="${item.judul}" loading="lazy" decoding="async" />
      <span class="gallery-card__shade"></span>
      <span class="gallery-card__content">
        <span class="gallery-card__category">${item.kategori}</span>
        <span class="gallery-card__title">${item.judul}</span>
        <span class="gallery-card__link">Baca kisah <span aria-hidden="true">→</span></span>
      </span>
    </a>
  `,
    )
    .join("");
}

// Reveal sections as they enter the viewport and let the hero ease away on scroll.
const revealItems = document.querySelectorAll(
  ".section__header, " +
    ".about__grid, " +
    ".map__container, " +
    ".gallery-card, " +
    ".footer-container, " +
    ".footer-bottom, " +
    ".page-header, " +
    ".btn-back",
);

if (reducedMotion.matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  revealItems.forEach((item) => item.classList.add("scroll-reveal"));

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    revealItems.forEach((item) => sectionObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

if (hero) {
  let heroFramePending = false;
  const updateHeroScrollEffect = () => {
    if (heroFramePending) return;
    heroFramePending = true;

    window.requestAnimationFrame(() => {
      const progress = reducedMotion.matches
        ? 0
        : Math.min(
            1,
            Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)),
          );
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
}

// Toggle the mobile navigation and keep its accessibility state in sync.
if (navigationToggle && navigation) {
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
}

// Replace Feather icon placeholders when the library is available.
if (window.feather) {
  window.feather.replace();
}

// Hilangkan Loading Screen saat web selesai dimuat
window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => (loader.style.display = "none"), 500);
  }
});

// Logika Scroll Reveal
window.addEventListener("scroll", function () {
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
window.dispatchEvent(new Event("scroll"));
