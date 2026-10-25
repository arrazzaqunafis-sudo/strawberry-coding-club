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
    deskripsi:
      "Karakteristik & Sejarah: Kompleks pusat pemerintahan Kerajaan Sunda (Galuh) pada abad ke-14 hingga ke-15 Masehi (zaman Prabu Niskala Wastu Kancana dan Prabu Surawisesa)" +
      "\nKeunikan: Situs ini terkenal karena memiliki banyak Prasasti Batu Tulis beraksara Sunda Kuno yang memuat aturan penataan kerajaan, pesan moral kepemimpinan, hingga sejarah kejayaan masa lalu. Di sini juga terdapat punden berundak, undakan batu kuno, struktur bekas keraton, serta makam-makam para tokoh leluhur Sunda yang dikeramatkan",
  },
  {
    judul:
      "Situs Jambansari Ciamis: Jejak Sejarah dan Tradisi Ziarah di Tatar Galuh",
    gambar: "./jpg/situs-jambansari.jpg",
    deskripsi: `MENGENAL SITUS JAMBANSARI
Kabupaten Ciamis memiliki berbagai peninggalan sejarah yang masih dapat ditemukan hingga sekarang. Salah satunya adalah Situs Jambansari, sebuah kompleks pemakaman yang berkaitan dengan sejarah pemerintahan Galuh. Tempat ini dikenal sebagai lokasi pemakaman Raden Adipati Aria (R.A.A.) Kusumadiningrat, yang merupakan Bupati Galuh ke-16 dan memimpin pada tahun 1839–1886. Situs Jambansari berada di kawasan Rancapetir, Kelurahan Linggasari, Kecamatan Ciamis, dengan luas sekitar empat hektare dan mulai dibangun pada tahun 1872.

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

function bukaDetail(index) {
  const situs = dataSejarah[index];

  let teksTampil = situs.deskripsi
    .split("\n\n")
    .map((paragraf) => {
      let baris = paragraf.split("\n");
      let judulParagraf = baris[0].trim();

      if (
        judulParagraf === judulParagraf.toUpperCase() &&
        judulParagraf.length > 3
      ) {
        let isiParagraf = baris.slice(1).join("<br>");
        return `<strong>${judulParagraf}</strong><br>${isiParagraf}`;
      } else {
        return paragraf.replace(/\n/g, "<br>");
      }
    })
    .join("<br><br>");

  document.getElementById("detail-judul").innerText = situs.judul;
  document.getElementById("detail-gambar").src = situs.gambar;
  document.getElementById("detail-teks").innerHTML = teksTampil;

  document.getElementById("halaman-daftar").style.display = "none";
  document.getElementById("halaman-detail").style.display = "block";

  window.scrollTo(0, 0);
}

function tutupDetail() {
  document.getElementById("halaman-detail").style.display = "none";
  document.getElementById("halaman-daftar").style.display = "block";
}

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
