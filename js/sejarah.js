document.addEventListener("DOMContentLoaded", () => {
  const dataSejarah = [
    {
      id: 0,
      judul: "Situs Bojong Galuh Karangkamulyan (Ciung Wanara)",
      gambar: ["./jpg/ciungwanara/ciungwanara.jpg"], 
      ringkasan: "Cagar budaya peninggalan Kerajaan Galuh yang erat kaitannya dengan legenda Ciung Wanara.",
      deskripsi: `SEJARAH DAN LOKASI
Situs Bojong Galuh Karangkamulyan merupakan salah satu cagar budaya terpenting di Jawa Barat yang menyimpan jejak peradaban Kerajaan Galuh. Terletak di Jalan Nasional Ciamis-Banjar, Desa Karangkamulyan, Ciamis.

LEGENDA CIUNG WANARA
Kawasan ini sangat erat kaitannya dengan legenda Ciung Wanara, cerita rakyat Sunda tentang seorang pangeran yang menuntut takhta dari ayahnya.`
    },
    {
      id: 1,
      judul: "Situs Astana Gede Kawali",
      gambar: [
        "./jpg/astana-gede-kawali/astana-gede-kawali.jpeg",
        "./jpg/astana-gede-kawali/astana-gede-kawali1.jpeg",
        "./jpg/astana-gede-kawali/astana-gede-kawali2.jpeg"
      ],
      ringkasan: "Pusat pemerintahan Kerajaan Galuh kuno tempat ditemukannya Prasasti Kawali I-VI.",
      deskripsi: `SEJARAH DAN LOKASI
Situs Astana Gede Kawali terletak di kaki Gunung Sawal. Kawasan hutan lindung ini menjadi pusat peradaban Sunda purba tempat ditemukannya enam prasasti bernilai tinggi.`
    },
    {
      id: 2,
      judul: "Situs Jambansari",
      gambar: ["./jpg/situs-jambansari/situs-jambansari.jpg"],
      ringkasan: "Kompleks cagar budaya dan pemakaman Kanjeng Prebu R.A.A. Kusumadiningrat.",
      deskripsi: `MENGENAL SITUS JAMBANSARI
Kabupaten Ciamis memiliki berbagai peninggalan sejarah yang masih dapat ditemukan hingga sekarang. Salah satunya adalah Situs Jambansari, sebuah kompleks pemakaman yang berkaitan dengan sejarah pemerintahan Galuh. Tempat ini dikenal sebagai lokasi pemakaman Raden Adipati Aria Kusumadiningrat, yang merupakan Bupati Galuh ke-16.`
    },
    {
      id: 3,
      judul: "Situs Gunung Susuru",
      gambar: ["./jpg/situs-Gunung-Susuru/situs-Gunung-Susuru.jpg"],
      ringkasan: "Kompleks punden berundak 17 tingkatan masa Klasik Hindu petilasan Galuh Kertabumi.",
      deskripsi: `SEJARAH DAN LOKASI
Situs Gunung Susuru terletak di Kertabumi, Cijeungjing. Kawasan ini merupakan punden berundak unik yang mengapit Sungai Cimuntur dan Cileueur.`
    },
    {
      id: 4,
      judul: "Situs Batu Panjang",
      gambar: ["./jpg/situs-Batu-Panjang/situs-Batu-Panjang.jpg"],
      ringkasan: "Situs Batu Panjang adalah peninggalan zaman Megalitikum yang berlokasi di perbatasan Ciamis–Majalengka.",
      deskripsi: `MENGENAL SITUS BATU PANJANG
Situs Batu Panjang Jahim merupakan kawasan peninggalan budaya yang terletak di Dusun Cimara, Desa Cibeureum, Kecamatan Sukamantri. Situs ini berada di kawasan hutan pinus Gunung Madati.`
    },
    {
      id: 5,
      judul: "Kampung Adat Kuta",
      gambar: ["./jpg/kampung-adat-kuta/kampung-adat-kuta.jpg"],
      ringkasan: "Kampung tradisional unik yang memegang teguh adat leluhur serta konservasi hutan keramat.",
      deskripsi: `Kampung Adat Kuta menjaga ketat leuweung gede (hutan keramat) dan tradisi rumah panggung kayu khas warisan leluhur Sunda Galuh.`
    },
    {
      id: 6,
      judul: "Situs Samida",
      gambar: ["./jpg/situs-samida/situs-samida.jpg"],
      ringkasan: "Samida merupakan situs bersejarah yang terletak di Desa Sirnajaya, Kecamatan Rajadesa.",
      deskripsi: `MENGENAL SITUS SAMIDA
Menurut informasi dari pemerintah desa dan masyarakat setempat, Situs Samida memiliki kaitan dengan sejarah Kerajaan Pajajaran dan tokoh yang dikenal sebagai Prabu Sirnaraja.`
    },
    {
      id: 7,
      judul: "Situs Geger Emas",
      gambar: ["./jpg/situs-Geger-Emas/situs-Geger-Emas.jpg"],
      ringkasan: "Situs Geger Emas adalah cagar budaya yang terletak di Desa Ciomas, Kecamatan Panjalu.",
      deskripsi: `LOKASI DAN TOKOH UTAMA
Berada di Desa Ciomas, situs ini menyimpan makam KH. Panghulu Gusti, yang dihormati sebagai penyebar Islam di Panjalu. Setiap menjelang bulan Ramadhan, masyarakat menggelar upacara adat Nyepuh.`
    },
    {
      id: 8,
      judul: "Situs Piktograf Citapen (Batu Radang)",
      gambar: ["./jpg/situs-Piktograf-Citapen/situs-Piktograf-Citapen.jpg"],
      ringkasan: "Situs Citapen adalah peninggalan seni cadas prasejarah yang terletak di Dusun Citapen, Desa Sukajaya.",
      deskripsi: `LOKASI DAN KONDISI MEDAN
Situs berada pada tebing curam di tepi Sungai Cijolang, tepatnya di lereng Gunung Rahong. Medannya sangat terjal dengan kemiringan tebing mendekati 80 derajat.`
    },
    {
      id: 9,
      judul: "Situs Galuh Salawe",
      gambar: ["./jpg/situs-Galuh-Salawe/situs-Galuh-Salawe.jpg"],
      ringkasan: "Situs ini terletak di Dusun Tunggal Rahayu, Desa Cimaragas, Kecamatan Cimaragas.",
      deskripsi: `LOKASI DAN BENTUK KAWASAN
Situs ini berada di sebuah bukit di tepi aliran Sungai Citanduy, sehingga menawarkan perpaduan wisata budaya dan minat khusus berupa rafting.`
    },
    {
      id: 10,
      judul: "Situs Gandoang Wanasigra",
      gambar: ["./jpg/situs-Gandoang-Wanasigra/situs-Gandoang-Wanasigra.jpg"],
      ringkasan: "Inti dari situs ini adalah makam Syekh Padamatan (Eyang Syeh Padamatan).",
      deskripsi: `Situs Gandoang adalah kawasan cagar budaya yang berfungsi sebagai kompleks makam kuno dan situs megalitik di Dusun Cipeucang, Desa Wanasigra.`
    },
    {
      id: 11,
      judul: "Kompleks Pendopo Kabupaten Ciamis",
      gambar: ["./jpg/gedung/gedung.jpg"], 
      ringkasan: "Komplek Pendopo Kabupaten dan Eks Kantor Kewedanaan Ciamis adalah dua bangunan bersejarah yang berdampingan di pusat kota.",
      deskripsi: `LOKASI DAN STATUS
Berada di Jalan Jenderal Sudirman No. 16, Kelurahan Ciamis. Bangunan ini ditetapkan sebagai cagar budaya karena memenuhi kriteria usia di atas 50 tahun.`
    }
  ];

  const gridContainer = document.getElementById("grid-sejarah");
  const daftarSection = document.getElementById("daftar-sejarah");
  const detailSection = document.getElementById("detail-sejarah");
  const judulDetail = document.getElementById("judul-detail");
  const isiDetail = document.getElementById("isi-detail");
  const btnKembali = document.getElementById("btn-kembali");
  const inputCari = document.getElementById("input-cari");

  function renderCards(items) {
    gridContainer.innerHTML = "";
    
    if (items.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Tidak ada situs sejarah yang ditemukan.</p>`;
        return;
    }

    items.forEach((item) => {
      gridContainer.innerHTML += `
        <div class="kartu-sejarah">
          <img src="${item.gambar[0]}" alt="${item.judul}" />
          <div class="kartu-sejarah__body">
            <h3>${item.judul}</h3>
            <p>${item.ringkasan}</p>
            <button class="btn-detail" data-id="${item.id}">Baca Selengkapnya →</button>
          </div>
        </div>
      `;
    });
  }

  renderCards(dataSejarah);

  if (inputCari) {
    inputCari.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = dataSejarah.filter((s) => s.judul.toLowerCase().includes(query));
      renderCards(filtered);
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-detail")) {
      const id = e.target.getAttribute("data-id");
      const data = dataSejarah.find((item) => item.id == id);

      if (data) {
        judulDetail.textContent = data.judul;
        isiDetail.innerHTML = data.deskripsi;

        const galeri = document.getElementById("galeri-foto-container");
        if (galeri) {
          galeri.innerHTML = ""; 
          
          
          data.gambar.forEach((urlFoto, index) => {
            galeri.innerHTML += `
              <div class="galeri-card">
                <img src="${urlFoto}" alt="Foto ${index+1}">
                <h4>Foto Dokumentasi ${index + 1}</h4>
              </div>
            `;
          });
        }

        daftarSection.hidden = true;
        detailSection.hidden = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });

  if (btnKembali) {
    btnKembali.addEventListener("click", () => {
      detailSection.hidden = true;
      daftarSection.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});