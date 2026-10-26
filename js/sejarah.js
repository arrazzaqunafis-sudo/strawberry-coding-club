document.addEventListener("DOMContentLoaded", () => {
  const dataSejarah = [
    {
      id: 0,
      judul: "Situs Bojong Galuh Karangkamulyan (Ciung Wanara)",
      gambar: "./jpg/ciungwanara.jpg",
      ringkasan: "Cagar budaya peninggalan Kerajaan Galuh yang erat kaitannya dengan legenda Ciung Wanara.",
      deskripsi: `SEJARAH DAN LOKASI
Situs Bojong Galuh Karangkamulyan merupakan salah satu cagar budaya terpenting di Jawa Barat yang menyimpan jejak peradaban Kerajaan Galuh. Terletak di Jalan Nasional Ciamis-Banjar, Desa Karangkamulyan, Ciamis.

LEGENDA CIUNG WANARA
Kawasan ini sangat erat kaitannya dengan legenda Ciung Wanara, cerita rakyat Sunda tentang seorang pangeran yang menuntut takhta dari ayahnya.`
    },
    {
      id: 1,
      judul: "Situs Astana Gede Kawali",
      gambar: "./jpg/astana-gede-kawali.jpeg",
      ringkasan: "Pusat pemerintahan Kerajaan Galuh kuno tempat ditemukannya Prasasti Kawali I-VI.",
      deskripsi: `SEJARAH DAN LOKASI
Situs Astana Gede Kawali terletak di kaki Gunung Sawal. Kawasan hutan lindung ini menjadi pusat peradaban Sunda purba tempat ditemukannya enam prasasti bernilai tinggi.`
    },
    {
      id: 2,
      judul: "Situs Jambansari",
      gambar: "./jpg/situs-jambansari.jpg",
      ringkasan: "Kompleks cagar budaya dan pemakaman Kanjeng Prebu R.A.A. Kusumadiningrat.",
      deskripsi: `MENGENAL SITUS JAMBANSARI
Merupakan lokasi pemakaman Raden Adipati Aria Kusumadiningrat, Bupati Galuh ke-16 yang memimpin pada tahun 1839–1886.`
    },
    {
      id: 3,
      judul: "Situs Gunung Susuru",
      gambar: "./jpg/situs-Gunung-Susuru.jpg",
      ringkasan: "Kompleks punden berundak 17 tingkatan masa Klasik Hindu petilasan Galuh Kertabumi.",
      deskripsi: `Situs Gunung Susuru terletak di Kertabumi, Cijeungjing. Kawasan ini merupakan punden berundak unik yang mengapit Sungai Cimuntur dan Cileueur.`
    },
    {
      id: 4,
      judul: "Kampung Adat Kuta",
      gambar: "./jpg/situs-kampung-adat-kuta.jpg",
      ringkasan: "Kampung tradisional unik yang memegang teguh adat leluhur serta konservasi hutan keramat.",
      deskripsi: `Kampung Adat Kuta menjaga ketat leuweung gede (hutan keramat) dan tradisi rumah panggung kayu khas warisan leluhur Sunda Galuh.`
    }
  ];

  const gridContainer = document.getElementById("grid-sejarah");
  const daftarSection = document.getElementById("daftar-sejarah");
  const detailSection = document.getElementById("detail-sejarah");

  const judulDetail = document.getElementById("judul-detail");
  const gambarDetail = document.getElementById("gambar-detail");
  const isiDetail = document.getElementById("isi-detail");

  const btnKembali = document.getElementById("btn-kembali");
  const inputCari = document.getElementById("input-cari");

  // Render List Card
  function renderCards(items) {
    gridContainer.innerHTML = "";
    if(items.length === 0) {
      gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Tidak ada situs sejarah yang ditemukan.</p>`;
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "kartu-sejarah";
      card.innerHTML = `
        <img src="${item.gambar}" alt="${item.judul}" />
        <div class="kartu-sejarah__body">
          <h3>${item.judul}</h3>
          <p>${item.ringkasan}</p>
          <button class="btn-detail" data-id="${item.id}">Baca Selengkapnya →</button>
        </div>
      `;
      gridContainer.appendChild(card);
    });
  }

  renderCards(dataSejarah);

  // Filter pencarian
  if(inputCari) {
    inputCari.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = dataSejarah.filter(s => s.judul.toLowerCase().includes(query) || s.deskripsi.toLowerCase().includes(query));
      renderCards(filtered);
    });
  }

  // Tampilkan Detail
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-detail")) {
      const id = e.target.getAttribute("data-id");
      const data = dataSejarah.find(item => item.id == id);

      if (data) {
        judulDetail.textContent = data.judul;
        gambarDetail.src = data.gambar;
        isiDetail.textContent = data.deskripsi;

        daftarSection.hidden = true;
        detailSection.hidden = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });

  // Kembali ke daftar
  if (btnKembali) {
    btnKembali.addEventListener("click", () => {
      detailSection.hidden = true;
      daftarSection.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});