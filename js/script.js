const header = document.querySelector("#site-header");
const hero = document.querySelector("#home");
const navigation = document.querySelector("#primary-navigation");
const navigationToggle = document.querySelector("#navbar-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem("ciamis-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Pengaturan tema (dark / light mode)
function applyTheme(theme) {
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
    themeColor.setAttribute("content", isDark ? "#0f172a" : "#faf8f5");
  }

  if (window.feather) {
    window.feather.replace();
  }
}

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

// Efek navbar saat di-scroll
function updateHeaderAppearance() {
  const heroIsBehindHeader =
    hero && window.scrollY + header.offsetHeight < hero.offsetHeight;
  header.classList.toggle("is-over-hero", Boolean(heroIsBehindHeader));
  header.classList.toggle("scrolled", !hero || window.scrollY > 50);
}

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
    const storyLinkHtml = Number.isInteger(lokasi.situsId)
      ? `<a href="sejarah.html?situs=${lokasi.situsId}" class="map-popup-link">Baca kisah situs →</a>`
      : "";
    const sourceLabel = lokasi.sumber.includes("openstreetmap.org")
      ? "Peta OpenStreetMap"
      : "Buka titik koordinat";
    marker.bindPopup(
      `
        <div class="map-popup-card">
          <span class="map-popup-badge map-popup-badge--${lokasi.jenis}">${lokasi.jenis === "wisata" ? "Wisata" : "Situs Sejarah"}</span>
          <strong class="map-popup-name">${lokasi.nama}</strong>
          <span class="map-popup-category">${lokasi.kategori}</span>
          <div class="map-popup-coords">Koordinat: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}</div>
          <div class="map-popup-footer">
            ${storyLinkHtml}
            <a href="${lokasi.sumber}" target="_blank" rel="noopener noreferrer" class="map-popup-source">${sourceLabel} ↗</a>
          </div>
        </div>
      `,
      { minWidth: 240, maxWidth: 300 },
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
      judul: "Situs Geger Omas",
      gambar: "./jpg/situs-Geger-Omas/situs-Geger-Omas.jpg",
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
      judul: "Kompleks Pendopo Kabupaten Ciamis",
      gambar: "./jpg/kompleks-pendopo/kompleks-pendopo.jpg",
      kategori: "Bangunan bersejarah",
    },
  ];

  galleryContainer.innerHTML = galeriSejarah
    .map(
      (item, index) => `
    <article class="gallery-card${index === 0 ? " gallery-card--featured" : ""}" data-index="${index}" role="button" tabindex="0" aria-label="Lihat foto besar ${item.judul}">
      <img src="${item.gambar}" alt="${item.judul}" loading="lazy" decoding="async" />
      <span class="gallery-card__shade"></span>
      <button type="button" class="gallery-card__zoom-btn" data-action="zoom" aria-label="Perbesar foto ${item.judul}" title="Perbesar foto">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </button>
      <span class="gallery-card__content">
        <span class="gallery-card__category">${item.kategori}</span>
        <span class="gallery-card__title">${item.judul}</span>
        <a href="sejarah.html?situs=${item.id}" class="gallery-card__link">Baca kisah <span aria-hidden="true">→</span></a>
      </span>
    </article>
  `,
    )
    .join("");

  galleryContainer.addEventListener("click", (e) => {
    if (e.target.closest(".gallery-card__link")) {
      return;
    }

    const card = e.target.closest(".gallery-card");
    if (card && typeof window.openLightbox === "function") {
      const idx = parseInt(card.getAttribute("data-index"), 10) || 0;
      const items = galeriSejarah.map((item) => ({
        src: item.gambar,
        title: item.judul,
        caption: `${item.judul} (${item.kategori})`,
        alt: item.judul,
        link: `sejarah.html?situs=${item.id}`,
        linkText: "Baca Kisah Lengkap Situs",
      }));
      window.openLightbox(items, idx);
    }
  });

  galleryContainer.addEventListener("keydown", (e) => {
    if (e.target.closest(".gallery-card__link")) return;
    const card = e.target.closest(".gallery-card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      card.click();
    }
  });
}

// Efek animasi elemen saat muncul di layar
const revealItems = document.querySelectorAll(
  ".section__header, .about__grid, .map__container, .gallery-card, .footer-container, .footer-bottom, .page-header, .btn-back",
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

// Buka/tutup menu navigasi mobile
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

// Inisialisasi ikon Feather
if (window.feather) {
  window.feather.replace();
}

// Menghilangkan loading screen setelah halaman selesai dimuat
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});
