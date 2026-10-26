// Mengambil bagian HTML
const daftarSejarah = document.getElementById("daftar-sejarah");
const detailSejarah = document.getElementById("detail-sejarah");

const judulDetail = document.getElementById("judul-detail");
const gambarDetail = document.getElementById("gambar-detail");
const isiDetail = document.getElementById("isi-detail");

const tombolKembali = document.getElementById("btn-kembali");

const dataSejarah = [
  {
    judul: " Situs Bojong Galuh Karangkamulyan (Situs Ciung Wanara) ",
    gambar: "./jpg/ciungwanara.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Bojong Galuh Karangkamulyan merupakan salah satu cagar budaya terpenting di Jawa Barat yang menyimpan jejak peradaban Kerajaan Galuh. Terletak di Jalan Nasional Ciamis-Banjar, Desa Karangkamulyan, Kecamatan Cijeungjing, Kabupaten Ciamis, kawasan ini dipercaya sebagai pusat pemerintahan Kerajaan Galuh pada masa kepemimpinan Raja Rahyang Niskala Wastu Kancana. Nama Karangkamulyan dalam naskah Babad Galuh bermakna "tempat yang mulia" atau "tempat dimuliakan".

LEGENDA CIUNG WANARA
Kawasan ini sangat erat kaitannya dengan legenda Ciung Wanara, cerita rakyat Sunda tentang seorang pangeran yang menuntut takhta dari ayahnya, Prabu Permana Dikusumah. Legenda ini bukan sekadar cerita, melainkan bagian dari identitas budaya masyarakat setempat yang diwariskan secara turun-temurun.

PENINGGALAN ARKEOLOGI
Di dalam kawasan hutan lindung seluas sekitar 25,5 hektare ini, pengunjung dapat menemukan berbagai peninggalan bersejarah yang masih terjaga. Terdapat 9 peninggalan arkeologi utama, di antaranya:
- Batu Pangcalikan: Dahulu berfungsi sebagai tahta atau tempat duduk raja.
- Sanghyang Bedil: Sebuah meriam mistis yang dipercaya memiliki kekuatan supranatural.
- Panyabungan Hayam: Tempat pertemuan atau tempat sabung ayam pada masa lalu.
- Lambang Peribadatan dan Panyandaan: Struktur batu yang mengandung nilai spiritual.
- Cikahuripan: Sumber mata air yang dikeramatkan.
- Makam Adipati Panaekan: Makam seorang keturunan Raja Galuh.

KEUNIKAN ALAM DAN TRADISI
Kawasan situs ini diapit oleh dua aliran sungai penting, yaitu Sungai Cimuntur dan Sungai Citanduy yang bertemu di satu titik. Pertemuan dua sungai ini tidak hanya memberikan pertahanan alami bagi pusat kerajaan di masa lalu, tetapi juga melambangkan harmoni kehidupan. Hingga kini, Situs Bojong Galuh Karangkamulyan tidak hanya menjadi destinasi wisata edukasi, tetapi juga ruang sakral tempat berbagai tradisi adat dan ritual penghormatan terhadap leluhur sering digelar.`,
  },
  {
    judul: " Situs Astana Gede Kawali ",
    gambar: "./jpg/astana-gede-kawali.jpeg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Astana Gede Kawali terletak di Dusun Indrayasa, Desa Kawali, Kecamatan Kawali, Kabupaten Ciamis, tepat di kaki Gunung Sawal. Kawasan yang berada di area hutan lindung seluas kurang lebih 5 hektar ini merupakan salah satu situs sejarah paling penting di Jawa Barat. Situs ini telah ditetapkan sebagai cagar budaya tingkat nasional pada 16 Juni 1998.

PRASASTI KAWALI DAN PENINGGALAN
Peninggalan paling ikonik di situs ini adalah 6 buah batu prasasti yang dikenal sebagai Prasasti Kawali I, II, III, IV, V, dan VI. Prasasti-prasasti ini bertuliskan aksara Sunda Kuno dan menceritakan tentang kebesaran Prabu Wastu Kancana, pembangunan pertahanan, serta nasihat-nasihat untuk rakyatnya. 
Selain prasasti, terdapat peninggalan lain seperti:
- Batu Pamuruyan: Batu yang diduga sebagai tempat disemayamkannya abu jenazah Citra Resmi atau Dyah Pitaloka.
- Petirtaan (Kolam Suci) Cikawali: Kolam yang dipercaya memiliki nilai spiritual dan sering digunakan untuk ritual.
- Makam Prabu Niskala Wastu Kancana beserta keluarganya.

NILAI SPIRITUAL DAN EDUKASI
Situs Astana Gede Kawali bukan hanya objek penelitian arkeologi, tetapi juga tempat ziarah yang sakral. Masyarakat setempat meyakini bahwa ziarah ke tempat ini berkaitan dengan peranan Pangeran Usman dan Adipati Singacala dalam menyebarkan agama Islam di wilayah Kawali. Kawasan ini telah dilengkapi fasilitas umum, menjadikannya sebagai sarana pembelajaran sejarah dan budaya Sunda yang lengkap bagi generasi muda.`,
  },
  {
    judul: " Situs Jambansari ",
    gambar: "./jpg/situs-jambansari.jpg",
    deskripsi: `MENGENAL SITUS JAMBANSARI
Kabupaten Ciamis memiliki berbagai peninggalan sejarah yang masih dapat ditemukan hingga sekarang. Salah satunya adalah Situs Jambansari, sebuah kompleks pemakaman yang berkaitan dengan sejarah pemerintahan Galuh. Tempat ini dikenal sebagai lokasi pemakaman Raden Adipati Aria (R.A.A.) Kusumadiningrat, yang merupakan Bupati Galuh ke-16 dan memimpin pada tahun 1839–1886. Situs Jambansari berada di kawasan Rancapetir, Kelurahan Linggasari, Kecamatan Ciamis, dengan luas sekitar empat hektare dan mulai dibangun pada tahun 1872.

SEJARAH DAN KEUNIKAN SITUS JAMBANSARI
Salah satu bagian utama dari Situs Jambansari adalah makam Kanjeng Prebu R.A.A. Kusumadiningrat. Makam tersebut berada di dalam bangunan cungkup berbahan kayu jati dengan bentuk atap menyerupai limas. Di sekelilingnya terdapat makam keluarga dan kerabat. Kawasan ini juga menyimpan sejumlah benda peninggalan masa lalu seperti lingga, yoni, menhir, arca Ganesha, gong, keris, dan keramik. Total seluruh arca yang ada di kompleks tersebut adalah 13 arca. Arca-arca ini dikumpulkan oleh R.A.A. Kusumadiningrat dalam rangka dakwah agama Islam.

TRADISI ZIARAH DAN JAMASAN PUSAKA
Selain dikenal sebagai tempat bersejarah, Situs Jambansari juga menjadi tujuan ziarah bagi masyarakat. Kegiatan yang dilakukan pengunjung di antaranya berdoa, berzikir, bertawasul, dan berziarah. Salah satu tradisi tahunan yang paling sakral adalah Jamasan Pusaka. Ritual ini digelar setiap bulan Rabiul Awal atau Maulid untuk membersihkan delapan pusaka peninggalan R.A.A. Kusumadiningrat, mulai dari keris, tombak, hingga pedang. Air yang digunakan untuk jamasan berasal dari delapan mata air, di antaranya Jambansari, Karangkamulyan, Pulo Majeti, Ciomas, Panjalu, Cakradewa, dan Situs Gandoang.

SITUS JAMBANSARI SEBAGAI SUMBER PEMBELAJARAN SEJARAH
Situs Jambansari juga memiliki hubungan dengan kegiatan pendidikan. Sebuah penelitian yang dilakukan oleh Edi Supriadi pada tahun 2013 membahas pemanfaatan Situs Jambansari sebagai sumber belajar sejarah lokal di SMP Negeri 2 Ciamis. Pemanfaatan situs sejarah dalam pembelajaran dapat membantu siswa memahami sejarah lokal, melatih keterampilan mencari sumber sejarah, serta meningkatkan kepedulian terhadap lingkungan sosial, budaya, dan keagamaan.

PENUTUP
Situs Jambansari merupakan salah satu peninggalan sejarah yang berada di Kabupaten Ciamis. Keberadaan makam R.A.A. Kusumadiningrat, berbagai benda peninggalan masa lalu, serta tradisi ziarah yang masih berlangsung menjadikan situs ini memiliki keterkaitan dengan sejarah, budaya, dan kehidupan masyarakat setempat.
  },
  {
    judul: " Situs Gunung Susuru ",
    gambar: "./jpg/situs-Gunung-Susuru.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Gunung Susuru terletak di Desa Kertabumi, Kecamatan Cijeungjing, Kabupaten Ciamis. Kawasan situs ini memiliki luas sekitar 7 hektare dan dikelilingi oleh dua sungai di bawahnya, yaitu Sungai Cimuntur dan Sungai Cileueur. Situs ini merupakan tinggalan punden berundak dari masa Kerajaan Hindu (Masa Klasik) dan dipercaya sebagai petilasan Kerajaan Galuh Kertabumi.

NAMA DAN TOPOGRAFI
Nama "Gunung Susuru" berasal dari nama bukit di wilayah tersebut yang pada masa lalu dipenuhi oleh kembang susuru, sejenis kaktus yang hanya tumbuh di sana. Punden berundak di situs ini memiliki struktur yang cukup unik, terdiri dari 17 tingkatan teras yang menunjukkan tingginya nilai spiritual dan ritual pada masa lampau.

PENINGGALAN ARKEOLOGI
Di kawasan ini, pengunjung dapat menemukan berbagai peninggalan bersejarah, antara lain:
- Punden Berundak: Struktur batu bertingkat yang menjadi ciri khas masa megalitikum.
- Tiga Buah Goa: Goa alami yang dipercaya memiliki nilai sakral.
- Satu Buah Sumur Batu: Sumur kuno yang hingga kini masih terjaga.
- Dolmen dan Menhir: Batu-batu besar yang didirikan untuk tujuan ritual.
- Batu Patapaan: Batu yang dipercaya sebagai tempat bertapa.

FUNGSI MASA LALU
Berdasarkan bukti-bukti peninggalan berupa dolmen dan menhir, Situs Gunung Susuru diperkirakan menjadi pusat ritual pemujaan pada masa lampau. Hingga saat ini, masyarakat sekitar masih sering mengunjungi situs ini untuk melihat peninggalan-peninggalan tersebut, terutama saat menggelar acara adat atau tradisi tahunan.`,
  },
  {
    judul: " Situs Batu Panjang ",
    gambar: "./jpg/situs-Batu-Panjang.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Batu Panjang terletak di Patok 7, Ciapu, Desa Cibeureum, Kecamatan Sukamantri, Kabupaten Ciamis, Jawa Barat. Lokasinya berada di area Perkebunan Pinus blok Jahim, yang merupakan perbatasan antara Kecamatan Cigambul, Kabupaten Majalengka, dengan Kabupaten Ciamis. Situs ini merupakan peninggalan dari zaman prasejarah atau zaman megalitikum yang masih penuh misteri.

KEUNIKAN BEBATUAN
Di lokasi ini, para pengunjung akan menemui ratusan batu berbentuk panjang, persegi, lonjong, dan pipih. Batu-batu tersebut membentuk berbagai posisi, ada yang menyilang, tergeletak berserakan, bahkan ada juga yang posisinya menyilang berdiri. Panjang rata-rata dari batu yang ada di lokasi tersebut adalah tiga meter dengan diameter sekitar 40 sentimeter. Bentuk batuannya tidak membulat, melainkan persegi lima.

MISTERI DAN KEMIRIPAN
Hingga kini, tidak ada yang tahu secara pasti bagaimana tempat ini bisa terbentuk. Namun, banyak yang menduga bahwa situs ini merupakan tempat pemujaan manusia purba. Bentuk batu-batu di Situs Batu Panjang ini hampir mirip dengan batu-batu yang ada di situs Gunung Padang, Lampegan, Cianjur.`,
  },
  {
    judul: " Kampung Adat Kuta ",
    gambar: "./jpg/situs-kampung-adat-kuta.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Kampung Adat Kuta terletak di Desa Karangpaningal, Kecamatan Tambaksari, Kabupaten Ciamis. Ini bukan sekadar situs bersejarah, melainkan sebuah kawasan pemukiman tradisional yang masih sangat memegang teguh nilai-nilai warisan leluhur Kerajaan Galuh. Masyarakat Kuta berhasil menciptakan pola hidup yang serasi dengan alam melalui kearifan lokal yang diwariskan secara turun-temurun.

LEUWEUNG GEDE: HUTAN KERAMAT
Pusat kearifan lingkungan di Kampung Kuta berakar dari keberadaan Leuweung Gede, sebuah hutan keramat seluas sekitar 31 hektare. Hutan ini dijaga ketat oleh aturan adat (pamali). Di kawasan ini berlaku larangan keras untuk menebang pohon, merusak tanaman, membunuh satwa, hingga mengambil benda apa pun. Siapa pun yang mendapat izin melintas pada hari tertentu wajib melepas alas kaki dan dilarang memakai pakaian berwarna serba hitam.

ARSITEKTUR DAN ATURAN ADAT
Selain perlindungan hutan, Kampung Kuta juga memiliki aturan adat unik dalam menata kawasan pemukiman. Seluruh rumah warga wajib berbentuk panggung kayu beratap ijuk atau rumbia, tanpa menggunakan fondasi tembok semen. Warga juga dilarang keras menggali sumur di pemukiman dan dilarang memakamkan jenazah di wilayah dalam kampung.

TRADISI DAN KONSERVASI
Keunikan tradisi masyarakat Kuta tercermin dalam kehidupan sosial dan ritual kebudayaan mereka. Saat menggelar upacara adat seperti Nyuguh, warga dilarang mengenakan perhiasan menyolok atau pakaian yang terlampau mewah.`,
  },
  {
    judul: " Situs Samida ",
    gambar: "./jpg/situs-samida.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Samida terletak di Desa Sirnajaya, Kecamatan Rajadesa, Kabupaten Ciamis. Kawasan ini merupakan situs bersejarah yang memiliki kaitan erat dengan Kerajaan Pajajaran dan Kerajaan Rajadesa. Nama "Samida" memiliki dua arti: berasal dari bahasa kirata "Nya, sami da" dan juga diambil dari nama pohon samida.

KAITAN DENGAN PRABU SILIWANGI
Menurut cerita rakyat dan penelitian, Situs Samida merupakan kawasan yang memiliki peran penting dalam berdirinya Rajadesa. Di kawasan ini pernah berdiri pusat pemerintahan pada masa Prabu Sirnaraja atau Prabu Guru Gantangan, yang merupakan putra dari Prabu Siliwangi dari salah satu selirnya.

PENINGGALAN DAN TRADISI
Di Situs Samida terdapat makam Prabu Sirnaraja atau Prabu Guru Gantangan. Selain itu, terdapat benda-benda pusaka peninggalan masa pemerintahan Prabu Sirnaraja yang masih dilestarikan hingga kini. Terdapat pula tradisi Nyalin, sebuah warisan budaya takbenda yang masih lestari dan dijalankan secara turun-temurun oleh masyarakat setempat.`,
  },
  {
    judul: " Situs Geger Emas ",
    gambar: "./jpg/situs-Geger-Emas.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Geger Emas terletak di Desa Ciomas, Kecamatan Panjalu, Kabupaten Ciamis, tepatnya di kaki Gunung Sawal. Kawasan ini merupakan hutan keramat yang memiliki nilai sejarah dan spiritual yang sangat tinggi bagi masyarakat setempat. Situs ini juga dikenal sebagai tempat wisata religi yang digunakan untuk acara adat.

TRADISI NYEPUH
Tradisi paling sakral di Situs Geger Emas adalah Nyepuh, sebuah ritual tahunan yang digelar menjelang bulan suci Ramadhan (biasanya pada pertengahan bulan Syaban). Upacara ini bertujuan untuk melakukan penyucian diri, baik jasmani maupun rohani, serta sebagai ungkapan penghargaan kepada leluhur.

RANGKAIAN RITUAL
Dalam tradisi Nyepuh, warga berjalan kaki menuju sumber air keramat "Geger Emas" yang terletak di hutan keramat sekitar lokasi makam. Air yang diambil dari sumber ini kemudian digunakan untuk ritual pembersihan diri, menandakan pembersihan fisik serta spiritual.

MAKAM DAN NILAI SEJARAH
Di kawasan ini juga terdapat makam Kiai Haji Panghulu Gusti, sosok nenek moyang yang memiliki peranan signifikan dalam penyebaran Islam di Ciomas. Upacara Nyepuh mengandung makna membersihkan diri dan juga mendoakan leluhur.`,
  },
  {
    judul: " Situs Piktograf Citapen (Batu Radang) ",
    gambar: "./jpg/situs-Piktograf-Citapen.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Piktograf Citapen atau yang lebih dikenal dengan Batu Tulis Citapen terletak di Dusun Citapen, Desa Sukajaya, Kecamatan Rajadesa, Kabupaten Ciamis. Situs ini berada di lereng tepi Sungai Cijolang, tepatnya di ketinggian sekitar 542 meter di atas permukaan laut. Situs ini merupakan salah satu peninggalan prasejarah yang sangat langka dan penting.

PENEMUAN DAN USIA
Situs Citapen ditemukan pertama kali pada tahun 1856 oleh ahli litografi Hindia-Belanda yang bernama Frans Carel Wilsen. Berdasarkan karakter goresannya, seni cadas Citapen menunjukkan dua tipe kedalaman, yakni berbentuk "U" dan "V". Pembuatan seni cadas ini kemungkinan besar berasal dari masa Mesolitik-Paleometalik. Pada tahun 2023, situs ini ditetapkan sebagai Cagar Budaya Kabupaten Ciamis.

MOTIF DAN KONDISI
Di Batu Tulis Citapen, terdapat goresan-goresan yang menyerupai berbagai motif bentuk makhluk hidup seperti manusia, kadal, dan monyet. Batu Tulis ini terletak pada dinding tebing yang menjulang sekitar 150 meter dengan tingkat kemiringan mendekati 80 derajat.

AKSES MENUJU LOKASI
Lokasi situs tersebut memang tidak mudah dijangkau. Jalan setapak sempit, licin oleh lumut, dan kontur tebing yang curam menjadi pengantar sebelum sampai ke lokasi batu bergores yang telah bertahan ribuan tahun.`,
  },
  {
    judul: " Situs Galuh Salawe ",
    gambar: "./jpg/situs-Galuh-Salawe.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Galuh Salawe berada di Dusun Tunggal Rahayu, Desa Cimaragas, Kecamatan Cimaragas, Kabupaten Ciamis. Situs ini merupakan peninggalan sejarah Kerajaan Galuh Pangauban (Perlindungan) Gara Tengah yang diperintah oleh seorang Raja Cipta Permana (1595-1618 M). Raja Cipta Permana merupakan penguasa Galuh Pangauban Islam pertama.

PENINGGALAN HINDU DAN ISLAM
Keunikan dari Situs Galuh Salawe adalah terdapatnya peninggalan dari dua masa yang berbeda, yaitu masa Hindu dan masa Islam. Beberapa peninggalan yang dapat ditemukan antara lain:
- Batu Entog (Trimurti): Batu yang melambangkan dewa Wisnu.
- Batu Panggeresan (Pangcalikan Raja): Batu tempat duduk raja.
- Patilasan Prabu Siliwangi.
- Patilasan Ulama Besar Syekh Abdul Kodir Jaelani.
- Gudang persenjataan kerajaan.

TRADISI MISALIN
Selain peninggalan fisik, masyarakat Salawe juga masih melestarikan tradisi Misalin. Tradisi ini menjadi ikon masyarakat Lembur Salawe Dusun Tunggal Rahayu. Dalam tradisi Misalin, masyarakat terlebih dahulu mempersiapkan peralatan yang diperlukan, antara lain bambu.`,
  },
  {
    judul: " Situs Gandoang Wanasigra ",
    gambar: "./jpg/situs-Gandoang-Wanasigra.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Situs Gandoang Wanasigra terletak di Dusun Kedungbangkong, Desa Sukajaya, Kecamatan Pamarican, Kabupaten Ciamis. Situs ini berada di lembah Sungai Ciseel dan memiliki nilai sejarah yang sangat penting bagi perkembangan literasi dan pemerintahan masa lalu.

NASKAH KUNO YANG BERHARGA
Situs ini terkenal karena menyimpan tinggalan naskah kuno yang sangat berharga. Terdapat dua naskah utama yang ditemukan di sini:
- Naskah Tambaga Wanasigra: Sebuah naskah berupa piagam yang berbahan lempengan logam tembaga berwarna kuning berbentuk persegi panjang.
- Naskah Kabuyutan Gandoang: Naskah kuno yang terbuat dari kertas daluang (kertas tradisional) yang sudah berwarna coklat kehitaman.
Berdasarkan kajian filologi, Naskah Gandoang adalah salah satu naskah salinan yang memuat nilai sejarah, karena di dalamnya terdapat data rekaman peristiwa yang terjadi pada abad ke-17 berupa surat pengukuhan kekuasaan.

PENINGGALAN LAINNYA
Selain naskah kuno, di Situs Gandoang juga terdapat peninggalan arkeologis lainnya seperti makam Syeh Padamatang, keris, dan tombak. Naskah-naskah ini menjadi bukti bahwa masyarakat Ciamis pada masa lalu telah memiliki tradisi literasi (tulis-menulis) yang tinggi.`,
  },
  {
    judul: " Kompleks Pendopo Kabupaten & Eks Kantor Kewedanaan Ciamis ",
    gambar:
      "./jpg/Kompleks-Pendopo-Kabupaten & Eks-Kantor-Kewedanaan-Ciamis.jpg",
    deskripsi: `SEJARAH DAN LOKASI
Kompleks Pendopo Kabupaten Ciamis dan Eks Kantor Kewedanaan Ciamis terletak di pusat Kota Ciamis, Kecamatan Ciamis. Bangunan-bangunan ini merupakan saksi bisu perkembangan pemerintahan di Kabupaten Ciamis dari masa kolonial hingga kemerdekaan. Pendopo ini memiliki keaslian arsitektur sekitar 70 persen.

MASA PEMBANGUNAN
Menurut catatan sejarah, Pendopo Bupati Ciamis dibangun pada masa Kabupaten Galuh dipimpin oleh Bupati Raden Adipati Arya (R.A.A.) Kusumahdiningrat alias Kanjeng Prebu yang memerintah pada tahun 1839-1886. Sebelum menjadi Pendopo Bupati Ciamis, bangunan tersebut dibangun untuk Asisten Residen Galuh atau Keresidenan Belanda.

ARSITEKTUR KOLONIAL
Gaya arsitektur kolonial Belanda di bangunan Pendopo Bupati Ciamis ini sangat kental. Ciri khas dari arsitektur bergaya Eropa itu adalah tiang pilar yang memiliki ukuran besar dan tinggi. Bangunan berwarna putih itu juga kerap disebut sebagai Gedung Negara dan kini difungsikan sebagai rumah dinas Bupati Ciamis.

MAKNA HISTORIS
Keberadaan kompleks ini menunjukkan ciri khas pemerintahan masa lalu, di mana dalam satu kompleks terdapat Alun-alun, Pendopo, Masjid Agung, Kantor Pos, Lapas, dan Gedung DPRD. Bangunan yang bergaya Eropa ini dulunya adalah gedung Loji Keresidenan Belanda yang digunakan untuk mengatur wilayah Galuh.`,
  },
];

const kartuSejarah = document.querySelectorAll(".kartu-sejarah");
let tombolSebelumnya;

// Buka detail melalui kontrol tombol agar dapat digunakan dengan keyboard.
kartuSejarah.forEach(function (kartu) {
  const tombolDetail = kartu.querySelector(".btn-detail");
  tombolDetail.type = "button";
  tombolDetail.addEventListener("click", function () {
    tombolSebelumnya = tombolDetail;
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
    document.activeElement?.blur();
    judulDetail.setAttribute("tabindex", "-1");
    judulDetail.focus();

    window.scrollTo(0, 0);
  });
});

// Tombol kembali ke daftar
tombolKembali.addEventListener("click", function () {
  detailSejarah.hidden = true;
  daftarSejarah.hidden = false;
  tombolSebelumnya?.focus();

  window.scrollTo(0, 0);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !detailSejarah.hidden) {
    tombolKembali.click();
  }
});
