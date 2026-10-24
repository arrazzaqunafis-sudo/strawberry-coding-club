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
      "Karakteristik & Sejarah: Ini adalah situs arkeologi peninggalan masa Hindu-Buddha yang sangat terkenal sebagai bekas pusat pemerintahan Kerajaan Galuh purba, yang erat kaitannya dengan legenda Ciung Wanara dan Prabu Permanadikusumah. Berada di area hutan lindung seluas sekitar 25,5 hektar diapit dua sungai besar (Citanduy dan Cimuntur)." +
      "\nStruktur Menarik di dalam Kompleks:" +
      "\nPangcalikan: Singgasana atau batu penobatan berbentuk batuan tuf (megalitikum) tempat raja duduk, kini menjadi pusat tradisi budaya Ngikis." +
      "\nSipatahunan: Tepian Sungai Citanduy yang diyakini dalam legenda sebagai tempat bayi Ciung Wanara dihanyutkan." +
      "\nSanghyang Bedil & Panyambungan Hayam: Struktur batu berbentuk segi empat serta arena batu melingkar tempat adu ayam legendaris dalam cerita rakyat." +
      "\n Cikahuripan: Pertemuan dua aliran air (Citeguh dan Cirahayu) yang disakralkan dan sering dikunjungi peziarah." +
      "\nPanyandaan & Makam Sri Bhagawat Pohaci: Tempat peristirahatan Dewi Naganingrum (ibunda Ciung Wanara) serta makam simbolis Dewi Sri (Pohaci)." +
      "\nBenteng dan Parit Pertahanan: Parit kuno buatan manusia selebar 10 meter yang menghubungkan Sungai Citanduy dan Cimuntur sebagai pertahanan benteng kerajaan.",
  },
  {
    judul: "Situs Astana Gede Kawali",
    gambar: "./jpg/astana-gede-kawali.jpeg",
    deskripsi:
      "Karakteristik & Sejarah: Kompleks pusat pemerintahan Kerajaan Sunda (Galuh) pada abad ke-14 hingga ke-15 Masehi (zaman Prabu Niskala Wastu Kancana dan Prabu Surawisesa)" +
      "\nKeunikan: Situs ini terkenal karena memiliki banyak Prasasti Batu Tulis beraksara Sunda Kuno yang memuat aturan penataan kerajaan, pesan moral kepemimpinan, hingga sejarah kejayaan masa lalu. Di sini juga terdapat punden berundak, undakan batu kuno, struktur bekas keraton, serta makam-makam para tokoh leluhur Sunda yang dikeramatkan",
  },
  {
    judul: "Situs Jambansari",
    gambar: "./jpg/situs-jambansari.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Kompleks makam dan kabuyutan penting yang dibangun oleh R.T.A. Kusumadiningrat (Bupati Ciamis ke-16 yang dijuluki Kangjeng Prebu)." +
      "\nFungsi & Daya Tarik: Situs ini merupakan pusat ziarah utama di Ciamis. Selain makam para bupati dan keluarga besar keraton Ciamis masa lalu, di kompleks ini terdapat kolam pemandian kuno, museum kecil yang menyimpan pusaka serta naskah kuno, dan suasana yang sangat tenang di tengah kota. Tempat ini rutin dikunjungi tokoh masyarakat, peziarah, hingga kontestan pemilu.",
  },
  {
    judul: "Situs Gunung Susuru",
    gambar: "./jpg/situs-Gunung-Susuru.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Kompleks punden berundak megah dari masa klasik (Hindu-Buddha) dengan luas sekitar 7 hektar" +
      "\nTemuan Arkeologi: Di bukit ini terdapat 3 buah goa alami/buatan, sumur batu purba, serta temuan artefak masa lalu seperti manik-manik kuno, pecahan keramik asing, senjata tajam, batu pipisan, hingga batu peluru meriam kuno.",
  },
  {
    judul: " Situs Batu Panjang",
    gambar: "./jpg/situs-Batu-Panjang.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Situs geologis dan budaya purbakala. Di lokasi ini terdapat hamparan batuan panjang (kolumnar joint / tihat kekar) yang terbentuk secara alamiah akibat aktivitas vulkanik purba jutaan tahun lalu, namun dikeramatkan serta dihubungkan dengan tradisi megalitik oleh masyarakat setempat. Salah satu batu yang bertumpuk mirip alat musik tradisional disebut warga sebagai Batu Kendang.",
  },
  {
    judul: " Kampung Adat Kuta",
    gambar: "./jpg/situs-Kampung-Adat-Kuta.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Perkampungan tradisional yang masyarakatnya masih teguh memegang adat istiadat, tatanan hidup, dan kearifan lokal warisan leluhur secara turun-temurun." +
      "\nKeunikan Budaya:" +
      "\nWarga dilarang membangun rumah tembok permanen dengan lantai semen (harus panggung dari kayu/bambu dengan atap ijuk/genteng tertentu) dan dilarang menggunakan listrik berlebihan di zona sakral." +
      "\nMemiliki Hutan Keramat (Leuweung Gede) yang sangat dilindungi; tidak boleh dimasuki sembarangan, tidak boleh ditebang, dan diambil hasilnya karena dipercaya dijaga oleh leluhur (Aki Lembur)." +
      "\nTerkenal dengan upacara adat tahunan seperti Nyuguh sebagai wujud syukur atas hasil bumi.",
  },
  {
    judul: " Situs Samida",
    gambar: "./jpg/situs-Samida.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Situs ekologis-historis berupa kawasan hutan larangan atau suaka alam purba (samida dalam bahasa Sunda kuno berarti hutan cadangan/hutan larangan kerajaan yang ditumbuhi tanaman langka dan pohon-pohon tua untuk keperluan ritual atau pelestarian alam kerajaan). Terletak di area dataran tinggi/bukit.",
  },
  {
    judul: " Situs Geger emas ",
    gambar: "./jpg/situs-Geger-Emas.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Kompleks kepurbakalaan unik yang memperlihatkan percampuran antara tradisi megalitik yang kuat dengan pengaruh periode Islam awal di tatar Galuh. Situs ini kaya akan struktur batu-batu penataan masa lalu yang disakralkan oleh warga setempat.",
  },
  {
    judul: " Situs Piktograf Citapen (Batu Radang) ",
    gambar: "./jpg/situs-Piktograf-Citapen.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Salah satu situs prasejarah paling fenomenal di Ciamis. Berupa dinding tebing batu di dekat aliran sungai yang menyimpan piktograf (gambar purba pada dinding batu) dan guratan/pahatan kuno. Penelitian arkeologis menunjukkan situs ini merekam jejak aktivitas hunian manusia purba prasejarah di Nusantara yang berusia ribuan tahun (bahkan diestimasi mencapai ribuan hingga 7.000 tahun yang lalu).",
  },
  {
    judul: " Situs Galuh Salawe ",
    gambar: "./jpg/situs-Galuh-Salawe.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Petilasan bersejarah yang diidentikkan dengan Sanghyang Cipta Permana / Prabu Digaluh Salawe, salah satu tokoh leluhur penting dalam silsilah pendirian Kerajaan Galuh Pangauban (Perlindungan). Situs ini berupa petilasan dan susunan batu keramat yang sering dikunjungi peziarah untuk ngabakti (ziarah budaya/leluhur).",
  },
  {
    judul: " Situs Gandoang Wanasigra",
    gambar: "./jpg/situs-Gandoang-Wanasigra.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Kompleks makam kuno dan kawasan hutan keramat yang sangat dihormati warga. Di dalamnya terdapat petilasan dan makam tokoh penyebar agama/leluhur lokal yang dihormati, yakni Syekh Padamatan. Tempat ini juga kerap menjadi pusat pelestarian tradisi seni budaya lokal buhun yang dikeramatkan.",
  },
  {
    judul: " Kompleks Pendopo Kabupaten & Eks Kantor Kewedanaan Ciamis ",
    gambar:
      "./jpg/Kompleks-Pendopo-Kabupaten & Eks-Kantor-Kewedanaan-Ciamis.jpg",
    deskripsi:
      "Karakteristik & Sejarah: Kompleks bangunan pemerintahan bersejarah yang resmi ditetapkan sebagai Objek Cagar Budaya tingkat kabupaten." +
      "\nPendopo Kabupaten Ciamis: Memiliki arsitektur megah bergaya kolonial Belanda berpadu dengan struktur tradisional yang menjadi pusat kendali pemerintahan lokal sejak masa kepemimpinan bupati-bupati terdahulu." +
      "\nEks Kantor Kewedanaan: Bangunan unik berkonstruksi kayu dengan sistem sambungan tradisional tanpa dinding masif yang merekam sejarah sistem administrasi kawedanaan di masa lalu (kini sebagian area dimanfaatkan untuk keperluan publik seperti kantor pemilu/KPU).",
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
