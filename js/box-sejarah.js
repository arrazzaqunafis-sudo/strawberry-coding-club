(function () {
  let lightboxEl = null;
  let imgEl = null;
  let captionEl = null;
  let counterEl = null;
  let downloadLink = null;
  let loaderEl = null;
  let prevBtn = null;
  let nextBtn = null;
  let closeBtn = null;

  let currentItems = [];
  let currentIndex = 0;
  let lastActiveElement = null;
  let touchStartX = 0;
  let touchEndX = 0;

  function createLightboxDOM() {
    if (document.getElementById("image-lightbox")) {
      lightboxEl = document.getElementById("image-lightbox");
      imgEl = lightboxEl.querySelector("#lightbox-img");
      captionEl = lightboxEl.querySelector("#lightbox-caption");
      counterEl = lightboxEl.querySelector("#lightbox-counter");
      downloadLink = lightboxEl.querySelector("#lightbox-download");
      loaderEl = lightboxEl.querySelector("#lightbox-loader");
      prevBtn = lightboxEl.querySelector(".lightbox-arrow-btn--prev");
      nextBtn = lightboxEl.querySelector(".lightbox-arrow-btn--next");
      closeBtn = lightboxEl.querySelector(".lightbox-icon-btn--close");
      return;
    }

    const modal = document.createElement("div");
    modal.id = "image-lightbox";
    modal.className = "image-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("tabindex", "-1");

    modal.innerHTML = `
      <div class="lightbox-overlay" data-action="close"></div>
      
      <!-- TOP BAR -->
      <header class="lightbox-topbar">
        <div class="lightbox-counter" id="lightbox-counter">1 / 1</div>
        <div class="lightbox-top-actions">
          <a id="lightbox-download" class="lightbox-icon-btn" href="#" download target="_blank" rel="noopener noreferrer" aria-label="Unduh foto" title="Unduh foto">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          <button type="button" class="lightbox-icon-btn lightbox-icon-btn--close" data-action="close" aria-label="Tutup pratinjau foto (Esc)" title="Tutup (Esc)">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <!-- NAVIGATION ARROWS (Floating Left & Right) -->
      <button type="button" class="lightbox-arrow-btn lightbox-arrow-btn--prev" data-action="prev" aria-label="Foto sebelumnya (Panah Kiri)" title="Sebelumnya (Panah Kiri)">
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <button type="button" class="lightbox-arrow-btn lightbox-arrow-btn--next" data-action="next" aria-label="Foto selanjutnya (Panah Kanan)" title="Selanjutnya (Panah Kanan)">
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      <!-- MAIN STAGE -->
      <div class="lightbox-stage">
        <div class="lightbox-loader" id="lightbox-loader">
          <span class="lightbox-spinner"></span>
        </div>
        <div class="lightbox-img-container">
          <img id="lightbox-img" class="lightbox-img" src="" alt="" />
        </div>
        <footer class="lightbox-bottom-info">
          <div class="lightbox-caption" id="lightbox-caption"></div>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);

    lightboxEl = modal;
    imgEl = modal.querySelector("#lightbox-img");
    captionEl = modal.querySelector("#lightbox-caption");
    counterEl = modal.querySelector("#lightbox-counter");
    downloadLink = modal.querySelector("#lightbox-download");
    loaderEl = modal.querySelector("#lightbox-loader");
    prevBtn = modal.querySelector(".lightbox-arrow-btn--prev");
    nextBtn = modal.querySelector(".lightbox-arrow-btn--next");
    closeBtn = modal.querySelector(".lightbox-icon-btn--close");

    modal.addEventListener("click", (e) => {
      const actionBtn = e.target.closest("[data-action]");
      if (!actionBtn) return;
      const action = actionBtn.dataset.action;
      if (action === "close") {
        closeLightbox();
      } else if (action === "prev") {
        prevImage();
      } else if (action === "next") {
        nextImage();
      }
    });

    const stage = modal.querySelector(".lightbox-stage");
    stage.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    stage.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true },
    );
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
  }

  function updateImage() {
    if (!currentItems || currentItems.length === 0) return;
    const item = currentItems[currentIndex];
    if (!item) return;

    if (loaderEl) loaderEl.style.display = "flex";
    if (imgEl) {
      imgEl.style.opacity = "0";
      imgEl.style.transform = "scale(0.985)";
    }

    const tempImg = new Image();
    tempImg.onload = () => {
      if (imgEl) {
        imgEl.src = item.src;
        imgEl.alt = item.alt || item.caption || "Foto dokumentasi besar";
        imgEl.style.opacity = "1";
        imgEl.style.transform = "scale(1)";
      }
      if (loaderEl) loaderEl.style.display = "none";
    };
    tempImg.onerror = () => {
      if (imgEl) {
        imgEl.src = item.src;
        imgEl.alt = item.alt || "Gagal memuat foto";
        imgEl.style.opacity = "1";
        imgEl.style.transform = "scale(1)";
      }
      if (loaderEl) loaderEl.style.display = "none";
    };
    tempImg.src = item.src;

    if (downloadLink) {
      downloadLink.href = item.src;
      downloadLink.setAttribute(
        "download",
        item.alt || `foto-ciamis-${currentIndex + 1}.jpg`,
      );
    }

    if (counterEl) {
      if (currentItems.length > 1) {
        counterEl.style.display = "block";
        counterEl.textContent = `${currentIndex + 1} / ${currentItems.length}`;
      } else {
        counterEl.style.display = "none";
      }
    }

    if (captionEl) {
      captionEl.textContent = item.caption || item.title || "";
    }

    if (prevBtn && nextBtn) {
      const showNav = currentItems.length > 1;
      prevBtn.style.display = showNav ? "flex" : "none";
      nextBtn.style.display = showNav ? "flex" : "none";
    }
  }

  function nextImage() {
    if (currentItems.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateImage();
  }

  function prevImage() {
    if (currentItems.length <= 1) return;
    currentIndex =
      (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateImage();
  }

  function handleKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevImage();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextImage();
    }
  }

  function openLightbox(items, startIndex = 0) {
    if (!items || items.length === 0) return;
    createLightboxDOM();

    currentItems = items;
    currentIndex = Math.max(0, Math.min(startIndex, items.length - 1));
    lastActiveElement = document.activeElement;

    lightboxEl.setAttribute("aria-hidden", "false");
    lightboxEl.classList.add("is-open");
    document.body.classList.add("lightbox-open");

    updateImage();

    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }

    window.addEventListener("keydown", handleKeydown);
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.setAttribute("aria-hidden", "true");
    lightboxEl.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");

    window.removeEventListener("keydown", handleKeydown);

    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  }

  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createLightboxDOM);
  } else {
    createLightboxDOM();
  }
})();
