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
    judul:
      "Situs Jambansari Ciamis: Jejak Sejarah dan Tradisi Ziarah di Tatar Galuh",
    gambar: "./jpg/situs-jambansari.jpg",
    deskripsi: `Mengenal Situs Jambansari

Kabupaten Ciamis memiliki berbagai peninggalan sejarah yang masih dapat ditemukan hingga sekarang. Salah satunya adalah Situs Jambansari, sebuah kompleks pemakaman yang berkaitan dengan sejarah pemerintahan Galuh. Tempat ini dikenal sebagai lokasi pemakaman Raden Adipati Aria Kusumadiningrat, yang merupakan Bupati Galuh ke-16 dan memimpin pada tahun 1839–1886.
Situs Jambansari berada di kawasan Rancapetir, Kelurahan Linggasari, Kecamatan Ciamis. Berdasarkan informasi dari Galuh Virtual milik Pemerintah Kabupaten Ciamis, kawasan situs ini memiliki luas sekitar empat hektare dan mulai dibangun pada tahun 1872.

Sejarah dan Keunikan Situs Jambansari

Salah satu bagian utama dari Situs Jambansari adalah makam Kanjeng Prebu R.A.A. Kusumadiningrat. Makam tersebut berada di dalam bangunan cungkup berbahan kayu jati dengan bentuk atap menyerupai limas. Di sekelilingnya terdapat makam keluarga dan kerabat.
Tidak hanya memiliki nilai sejarah dari tokoh yang dimakamkan, kawasan ini juga menyimpan sejumlah benda peninggalan masa lalu. Berdasarkan keterangan dalam Galuh Virtual, terdapat berbagai benda seperti lingga, yoni, menhir, arca Ganesha, gong, keris, dan keramik. Benda-benda tersebut menjadi bagian dari koleksi yang tersimpan di kawasan Jambansari.
Keberadaan benda-benda tersebut menunjukkan bahwa Situs Jambansari tidak hanya berkaitan dengan sejarah pemerintahan Galuh, tetapi juga menyimpan peninggalan yang dapat digunakan untuk mempelajari kehidupan masyarakat pada masa lampau.

Tradisi Ziarah yang Masih Berlangsung

Selain dikenal sebagai tempat bersejarah, Situs Jambansari juga menjadi tujuan ziarah bagi masyarakat. Dalam pemberitaan DetikJabar pada 22 November 2022, disebutkan bahwa tempat ini dikunjungi oleh berbagai kalangan, termasuk peziarah dan sejumlah kontestan pemilu.
Kegiatan yang dilakukan pengunjung di antaranya berdoa, berzikir, bertawasul, dan berziarah. Kunjungan juga menjadi perhatian ketika memasuki masa pemilihan umum. Dalam pemberitaan tersebut, juru kunci Situs Jambansari, Nandang Sembada, turut menjelaskan mengenai kegiatan ziarah yang berlangsung di kawasan tersebut.
Ia juga mengingatkan bahwa kegiatan ziarah sebaiknya tetap diarahkan sebagai bentuk ibadah kepada Allah SWT, bukan menjadikan makam sebagai tempat meminta sesuatu.

Situs Jambansari sebagai Sumber Pembelajaran Sejarah

Situs Jambansari juga memiliki hubungan dengan kegiatan pendidikan. Sebuah penelitian yang dilakukan oleh Edi Supriadi pada tahun 2013 membahas pemanfaatan Situs Jambansari sebagai sumber belajar sejarah lokal di SMP Negeri 2 Ciamis.
Penelitian tersebut menunjukkan bahwa pemanfaatan situs sejarah dalam pembelajaran dapat membantu siswa memahami sejarah lokal, melatih keterampilan mencari sumber sejarah, serta meningkatkan kepedulian terhadap lingkungan sosial, budaya, dan keagamaan.
Hal ini memperlihatkan bahwa peninggalan sejarah seperti Situs Jambansari tidak hanya dapat dikenal melalui buku atau materi di kelas. Keberadaan situs juga dapat menjadi sumber pembelajaran yang membantu siswa mengenal sejarah daerahnya.

Pelestarian Situs Jambansari

Keberadaan situs sejarah tentu berkaitan dengan upaya perawatan dan pengelolaannya. Penelitian yang diterbitkan dalam Jurnal Dinamika Universitas Galuh pada tahun 2021 membahas kolaborasi antarinstansi dalam pengembangan Situs Jambansari.
Penelitian tersebut menemukan bahwa kerja sama dalam pengembangan situs belum sepenuhnya berjalan dengan baik. Beberapa kendala yang disebutkan adalah belum optimalnya kerja sama antara pemerintah dan lembaga terkait, kurangnya pendidikan serta pelatihan bagi masyarakat dalam pengelolaan situs, dan masih rendahnya keterlibatan masyarakat.
Penelitian itu juga menyampaikan beberapa rekomendasi, seperti perlunya kerja sama resmi antarinstansi, peningkatan kesadaran masyarakat, serta program pendidikan mengenai kebudayaan Galuh.

Penutup

Situs Jambansari merupakan salah satu peninggalan sejarah yang berada di Kabupaten Ciamis. Keberadaan makam R.A.A. Kusumadiningrat, berbagai benda peninggalan masa lalu, serta tradisi ziarah yang masih berlangsung menjadikan situs ini memiliki keterkaitan dengan sejarah, budaya, dan kehidupan masyarakat setempat.
Melalui keberadaan Situs Jambansari, masyarakat dapat mengenal lebih jauh sejarah daerahnya. Oleh karena itu, informasi mengenai situs ini perlu terus dikenalkan agar peninggalan sejarah dan budaya lokal tetap diketahui oleh generasi berikutnya.`,
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
