// Mengambil bagian HTML
const daftarSejarah = document.getElementById("daftar-sejarah");
const detailSejarah = document.getElementById("detail-sejarah");

const judulDetail = document.getElementById("judul-detail");
const gambarDetail = document.getElementById("gambar-detail");
const isiDetail = document.getElementById("isi-detail");

const tombolKembali = document.getElementById("btn-kembali");

const dataSejarah = [
  {
    judul: "SItus Bojong Galuh Karangkamulyan (Situs Ciung Wanara)",
    gambar: "./jpg/ciungwanara.jpg",
    deskripsi:
      "Situs Karangkamulyan (sering disebut sebagai Situs Ciung Wanara) adalah objek wisata sejarah, budaya, dan arkeologi yang terletak di Desa Karangkamulyan, Kecamatan Cijeungjing, Kabupaten Ciamis, Jawa Barat. Kawasan ini diyakini sebagai pusat pemerintahan Kerajaan Galuh (abad ke-7 hingga ke-14 Masehi) serta erat kaitannya dengan legenda rakyat Sunda tentang Ciung Wanara.",
  },
  {
    judul: "Situs Astana Gede Kawali",
    gambar: "./jpg/astana-gede-kawali.jpeg",
    deskripsi:
      "Situs Astana Gede Kawali adalah kompleks cagar budaya sekaligus situs sejarah yang terletak di Dusun Indrayasa, Desa Kawali, Kecamatan Kawali, Kabupaten Ciamis, Jawa Barat. Berada di lahan hutan lindung seluas sekitar 5 hektare di kaki Gunung Sawal, kawasan ini dahulu merupakan ibu kota Kerajaan Galuh (sekitar abad ke-14 Masehi) dengan keratonnya yang bernama Surawisesa." +
      "\nSebagai salah satu pusat peradaban Sunda kuno, situs ini sangat unik karena menyimpan peninggalan dari tiga periode sekaligus: prasejarah, klasik (Hindu-Buddha), hingga masa penyebaran Islam.",
  },
  {
    judul: "Situs Jambansari",
    gambar: "./jpg/situs-jambansari.jpg",
    deskripsi:
      "Kompleks makam keluarga Bupati Ciamis terdahulu, khususnya Raden Tumenggung Aria (R.A.A.) Kusumadiningrat (Kanjeng Prebu) yang memimpin Ciamis pada abad ke-19, lengkap dengan museum benda-benda pusaka sejarah.",
  },
  {
    judul: "Situs Gunung Susuru",
    gambar: "./jpg/situs-Gunung-Susuru.jpg",
    deskripsi:
      " Kompleks situs peninggalan masa Kerajaan Galuh yang dikelilingi oleh lanskap alam dan struktur bebatuan masa lalu.",
  },
  {
    judul: " Situs Batu Panjang",
    gambar: "./jpg/situs-Batu-Panjang.jpg",
    deskripsi:
      "Situs peninggalan zaman prasejarah (megalitikum) berupa susunan batu panjang yang disakralkan dan dikeramatkan oleh warga sekitar.",
  },
  {
    judul: " Kampung Adat Kuta",
    gambar: "./jpg/situs-Kampung-Adat-Kuta.jpg",
    deskripsi:
      "Kawasan perkampungan tradisional yang masih memegang teguh adat istiadat leluhur secara turun-temurun, lengkap dengan hutan keramat (Leuweung Gede) yang dilindungi aturan adat ketat.",
  },
  {
    judul: " Situs Samida",
    gambar: "./jpg/situs-Samida.jpg",
    deskripsi:
      "Kawasan hutan larangan / konservasi masa lalu yang merujuk pada catatan buatan peninggalan Sri Baduga Maharaja(Prabu Siliwangi) pada tahun 1445M",
  },
  {
    judul: " Situs Geger emas ",
    gambar: "./jpg/situs-Geger-Emas.jpg",
    deskripsi:
      "Kompleks kepurbakalaan bercorak Islam dengan pengaruh tradisi megalitik yang kuat. Tempat ini sering digunakan untuk tradisi budaya adat lokal seperti upacara Nyepuh.",
  },
  {
    judul: " Situs Piktograf Citapen (Batu Radang) ",
    gambar: "./jpg/situs-Piktograf-Citapen.jpg",
    deskripsi:
      "Situs prasejarah berupa goresan atau piktograf pada dinding tebing bukit yang berada dekat aliran Sungai Cijolang.",
  },
  {
    judul: " Situs Galuh Salawe ",
    gambar: "./jpg/situs-Galuh-Salawe.jpg",
    deskripsi:
      " Kompleks situs arkeologi yang menyimpan peninggalan berupa menhir, punden berundak, prasasti, serta beberapa makam keramat.",
  },
  {
    judul: " Situs Gandoang Wanasigra",
    gambar: "./jpg/situs-Gandoang-Wanasigra.jpg",
    deskripsi:
      "Situs di lembah Sungai Ciseel yang menyimpan tinggalan naskah kuno (naskah Gandoang dan naskah tembaga Wanasigra), struktur batu, serta makam leluhur.",
  },
  {
    judul: " Kompleks Pendopo Kabupaten & Eks Kantor Kewedanaan Ciamis ",
    gambar:
      "./jpg/Kompleks-Pendopo-Kabupaten & Eks-Kantor-Kewedanaan-Ciamis.jpg",
    deskripsi:
      "Bangunan pusat pemerintahan bersejarah peninggalan masa kolonial/Bupati R.A.A Kusumahdiningrat yang merefleksikan arsitektur tradisional kayu khas Sunda tempo dulu.",
  },
];

const kartuSejarah = document.querySelectorAll(".kartu-sejarah");

// Ketika kartu diklik
kartuSejarah.forEach(function (kartu) {
  kartu.addEventListener("click", function () {
    // Mengetahui kartu yang dipilih
    const nomor = kartu.dataset.sejarah;

    // Mengambil data sesuai nomor kartu
    const sejarah = dataSejarah[nomor];

    // Mengubah isi halaman detail
    judulDetail.textContent = sejarah.judul;
    gambarDetail.src = sejarah.gambar;
    gambarDetail.alt = sejarah.judul;
    isiDetail.textContent = sejarah.deskripsi;

    // Menampilkan detail
    daftarSejarah.hidden = true;
    detailSejarah.hidden = false;

    window.scrollTo(0, 0);
  });
});

// Tombol kembali ke daftar
tombolKembali.addEventListener("click", function () {
  detailSejarah.hidden = true;
  daftarSejarah.hidden = false;

  window.scrollTo(0, 0);
});
