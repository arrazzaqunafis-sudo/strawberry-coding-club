document.addEventListener("DOMContentLoaded", () => {
  const dataSejarah = [
    {
      id: 0,
      judul: "Situs Bojong Galuh Karangkamulyan",
      gambar: ["./jpg/ciungwanara/ciungwanara.jpg"], 
      ringkasan: "Cagar budaya peninggalan Kerajaan Galuh yang erat kaitannya dengan legenda Ciung Wanara.",
      deskripsi: `SEJARAH DAN LOKASI<br>Situs Bojong Galuh Karangkamulyan merupakan salah satu cagar budaya terpenting di Jawa Barat yang menyimpan jejak peradaban Kerajaan Galuh. Terletak di Jalan Nasional Ciamis-Banjar, Desa Karangkamulyan, Ciamis.<br><br>LEGENDA CIUNG WANARA<br>Kawasan ini sangat erat kaitannya dengan legenda Ciung Wanara, cerita rakyat Sunda tentang seorang pangeran yang menuntut takhta dari ayahnya.`,
      peta: "https://maps.google.com/maps?q=Situs+Bojong+Galuh+Karangkamulyan&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
      deskripsi: `SEJARAH DAN LOKASI<br>Situs Astana Gede Kawali terletak di kaki Gunung Sawal. Kawasan hutan lindung ini menjadi pusat peradaban Sunda purba tempat ditemukannya enam prasasti bernilai tinggi.`,
      peta: "https://maps.google.com/maps?q=Astana+Gede+Kawali&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 2,
      judul: "Situs Jambansari",
      gambar: ["./jpg/situs-jambansari/situs-jambansari.jpg"],
      ringkasan: "Kompleks cagar budaya dan pemakaman Kanjeng Prebu R.A.A. Kusumadiningrat.",
      deskripsi: `SEJARAH DAN LOKASI<br>Situs Jambansari adalah kompleks pemakaman yang berkaitan dengan sejarah pemerintahan Galuh. Tempat ini dikenal sebagai lokasi pemakaman Raden Adipati Aria Kusumadiningrat, Bupati Galuh ke-16.`,
      peta: "https://maps.google.com/maps?q=Situs+Jambansari+Ciamis&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 3,
      judul: "Situs Gunung Susuru",
      gambar: ["./jpg/situs-Gunung-Susuru/situs-Gunung-Susuru.jpg"],
      ringkasan: "Kompleks punden berundak 17 tingkatan masa Klasik Hindu petilasan Galuh Kertabumi.",
      deskripsi: `SEJARAH DAN LOKASI<br>Situs Gunung Susuru terletak di Kertabumi, Cijeungjing. Kawasan ini merupakan punden berundak unik yang mengapit Sungai Cimuntur dan Cileueur.`,
      peta: "https://maps.google.com/maps?q=Situs+Gunung+Susuru+Ciamis&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 4,
      judul: "Situs Batu Panjang",
      gambar: ["./jpg/situs-Batu-Panjang/situs-Batu-Panjang.jpg"],
      ringkasan: "Situs Batu Panjang adalah peninggalan zaman Megalitikum yang berlokasi di perbatasan Ciamis–Majalengka.",
      deskripsi: `Situs Batu Panjang Jahim merupakan situs peninggalan budaya yang terletak di Dusun Cimara, Desa Cibeureum, Kecamatan Sukamantri, Kabupaten Ciamis, Jawa Barat. Situs ini berada di kawasan hutan pinus Gunung Madati dan dikenal karena kumpulan batu besar dengan bentuk serta susunan yang beragam.
            Situs Batu Panjang telah lama dikenal oleh masyarakat sekitar sebagai kawasan yang memiliki nilai sejarah dan dianggap sakral. Keberadaan batu-batu tersebut diduga berkaitan dengan tradisi megalitik, yaitu kebudayaan masa lampau yang menggunakan batu berukuran besar untuk keperluan tertentu. Namun, usia dan fungsi asli batu-batu tersebut belum diketahui secara pasti.
            Di kawasan situs ini terdapat batu andesit yang berbentuk memanjang, lonjong, dan pipih. Beberapa di antaranya dikenal sebagai Batu Kendang karena susunannya menyerupai alat musik kendang dan Batu Tapak Maung yang memiliki cekungan kecil menyerupai jejak kaki harimau. Bentuk dan susunan batu tersebut menjadi daya tarik untuk mempelajari peninggalan kebudayaan masa lampau.
            Selain memiliki nilai sejarah, Situs Batu Panjang dikelilingi hutan pinus dengan udara sejuk dan pemandangan alam yang menarik. Cerita serta kepercayaan masyarakat terhadap batu-batu tertentu juga menjadi bagian dari tradisi budaya setempat. Hal ini menunjukkan bahwa situs tersebut memiliki makna bagi masyarakat di sekitarnya.
            Keberadaan batu-batu bersejarah dan lingkungan alamnya menjadikan Situs Batu Panjang sebagai salah satu warisan budaya yang penting di Kabupaten Ciamis. Oleh karena itu, situs ini perlu dijaga melalui perlindungan peninggalan, pemeliharaan lingkungan, dan penelitian lebih lanjut agar nilai sejarah serta budayanya tetap terpelihara dan dikenal oleh generasi mendatang.`,
      peta: "https://maps.google.com/maps?q=Situs+Batu+Panjang+Jahim+Ciamis&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 5,
      judul: "Kampung Adat Kuta",
      gambar: ["./jpg/kampung-adat-kuta/kampung-adat-kuta.jpg"],
      ringkasan: "Kampung tradisional unik yang memegang teguh adat leluhur serta konservasi hutan keramat.",
      deskripsi: `Kampung Adat Kuta merupakan perkampungan tradisional yang terletak di Desa Karangpaningal, Kecamatan Tambaksari, Kabupaten Ciamis, Jawa Barat. Kampung ini dikenal karena masyarakatnya masih mempertahankan adat istiadat Sunda, tradisi leluhur, serta menjaga kelestarian lingkungan.
            Menurut cerita masyarakat setempat, kawasan ini dahulu direncanakan menjadi pusat pemerintahan Kerajaan Galuh, tetapi rencana tersebut tidak terlaksana. Cerita ini diwariskan secara turun-temurun dan menjadi bagian dari sejarah lisan Kampung Adat Kuta.
            Salah satu keunikan kampung ini adalah aturan adat yang disebut pamali, yaitu larangan yang diwariskan oleh leluhur untuk menjaga kehidupan masyarakat dan kelestarian alam. Aturan tersebut juga diterapkan di Leuweung Gede, yaitu hutan keramat yang dilindungi oleh masyarakat. Berkat upaya pelestarian lingkungan, Kampung Adat Kuta menerima penghargaan Kalpataru pada tahun 2002.
            Selain mempertahankan aturan adat, masyarakat Kampung Adat Kuta juga menjaga arsitektur rumah tradisional Sunda yang umumnya berbentuk rumah panggung dengan bahan kayu dan bambu. Berbagai upacara adat, seperti Hajat Nyuguh, Hajat Bumi, dan Babarit, juga masih dilaksanakan sebagai bentuk rasa syukur sekaligus upaya melestarikan budaya leluhur.
            Dalam kehidupan sehari-hari, masyarakat menjunjung tinggi gotong royong dan bekerja sebagai petani, pengrajin gula aren, serta pengrajin anyaman. Pelestarian kampung juga didukung oleh Peraturan Daerah Kabupaten Ciamis Nomor 15 Tahun 2016 tentang Pengakuan dan Perlindungan Masyarakat Hukum Adat Kampung Kuta.
            Keberadaan tradisi, aturan adat, rumah tradisional, dan hutan keramat menjadikan Kampung Adat Kuta sebagai salah satu warisan budaya penting di Kabupaten Ciamis. Oleh karena itu, adat istiadat dan lingkungan kampung perlu terus dijaga agar nilai-nilai kearifan lokal tetap diwariskan kepada generasi mendatang`,
      peta: "https://maps.google.com/maps?q=Kampung+Adat+Kuta+Ciamis&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 6,
      judul: "Situs Samida",
      gambar: ["./jpg/situs-samida/situs-samida.jpg"],
      ringkasan: "Samida merupakan situs bersejarah yang terletak di Desa Sirnajaya, Kecamatan Rajadesa.",
      deskripsi: `Situs Samida merupakan situs bersejarah yang terletak di Desa Sirnajaya, Kecamatan Rajadesa, Kabupaten Ciamis, Jawa Barat. Situs ini memiliki nilai sejarah dan budaya serta dikembangkan sebagai tempat wisata religi dan edukasi.
           Menurut cerita masyarakat setempat, nama Samida berkaitan dengan nama sebuah pohon. Situs ini juga memiliki kisah tentang Prabu Sirnaraja atau Prabu Guru Gantangan yang dipercaya sebagai putra Prabu Siliwangi. Namun, kisah tersebut merupakan cerita turun-temurun yang belum seluruhnya dapat dipastikan secara historis.
           Di kawasan Situs Samida terdapat peninggalan berupa susunan batu melingkar yang dikenal sebagai Teras Batu Samida dan Pagempungan, serta batu tegak yang disebut menhir. Selain itu, terdapat laporan mengenai temuan pecahan keramik dan kerak besi yang dapat menjadi petunjuk untuk mempelajari aktivitas manusia pada masa lampau.
           Situs Samida juga berkaitan dengan tradisi Nyalin, yaitu kegiatan adat untuk mengganti pembungkus benda pusaka dan membersihkannya. Tradisi ini menjadi bentuk penghormatan terhadap warisan leluhur sekaligus upaya masyarakat dalam menjaga kebudayaan yang diwariskan secara turun-temurun.
           Keberadaan peninggalan sejarah dan tradisi tersebut menjadikan Situs Samida sebagai salah satu warisan budaya penting di Kabupaten Ciamis. Oleh karena itu, situs ini perlu dijaga dan dilestarikan agar nilai sejarah serta kebudayaannya tetap dikenal oleh generasi mendatang..`,
      peta: "https://maps.google.com/maps?q=Situs+Samida+Rajadesa&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 7,
      judul: "Situs Geger Emas",
      gambar: ["./jpg/situs-Geger-Emas/situs-Geger-Emas.jpg"],
      ringkasan: "Situs Geger Emas adalah cagar budaya yang terletak di Desa Ciomas, Kecamatan Panjalu.",
      deskripsi: `SEJARAH DAN LOKASI<br>Berada di Desa Ciomas, situs ini menyimpan makam KH. Panghulu Gusti, yang dihormati sebagai penyebar Islam di Panjalu. Setiap menjelang Ramadhan, masyarakat menggelar upacara adat Nyepuh.`,
      peta: "https://maps.google.com/maps?q=Situs+Geger+Emas+Ciomas&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 8,
      judul: "Situs Piktograf Citapen",
      gambar: ["./jpg/situs-Piktograf-Citapen/situs-Piktograf-Citapen.jpg"],
      ringkasan: "Situs Citapen adalah peninggalan seni cadas prasejarah yang terletak di Dusun Citapen, Desa Sukajaya.",
      deskripsi: `SEJARAH DAN LOKASI<br>Situs berada pada tebing curam di tepi Sungai Cijolang, tepatnya di lereng Gunung Rahong. Medannya sangat terjal dengan kemiringan tebing mendekati 80 derajat.`,
      peta: "https://maps.google.com/maps?q=Situs+Piktograf+Citapen&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 9,
      judul: "Situs Galuh Salawe",
      gambar: ["./jpg/situs-Galuh-Salawe/situs-Galuh-Salawe.jpg"],
      ringkasan: "Situs ini terletak di Dusun Tunggal Rahayu, Desa Cimaragas, Kecamatan Cimaragas.",
      deskripsi: `SEJARAH DAN LOKASI<br>Situs ini berada di sebuah bukit di tepi aliran Sungai Citanduy, sehingga menawarkan perpaduan wisata budaya dan minat khusus berupa rafting.`,
      peta: "https://maps.google.com/maps?q=Situs+Galuh+Salawe&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 10,
      judul: "Situs Gandoang Wanasigra",
      gambar: ["./jpg/situs-Gandoang-Wanasigra/situs-Gandoang-Wanasigra.jpg"],
      ringkasan: "Inti dari situs ini adalah makam Syekh Padamatan (Eyang Syeh Padamatan).",
      deskripsi: `SEJARAH DAN LOKASI<br>Situs Gandoang adalah kawasan cagar budaya yang berfungsi sebagai kompleks makam kuno dan situs megalitik di Dusun Cipeucang, Desa Wanasigra.`,
      peta: "https://maps.google.com/maps?q=Situs+Gandoang+Wanasigra&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 11,
      judul: "Kompleks Pendopo Kabupaten Ciamis",
      gambar: ["./jpg/gedung/gedung.jpg"], // Sesuaikan dengan nama folder gedungmu
      ringkasan: "Komplek Pendopo Kabupaten dan Eks Kantor Kewedanaan Ciamis adalah dua bangunan bersejarah yang berdampingan.",
      deskripsi: `SEJARAH DAN LOKASI<br>Berada di Jalan Jenderal Sudirman No. 16, Kelurahan Ciamis. Bangunan ini ditetapkan sebagai cagar budaya karena memenuhi kriteria usia di atas 50 tahun.`,
      peta: "https://maps.google.com/maps?q=Pendopo+Bupati+Ciamis&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
    if (!gridContainer) return;
    gridContainer.innerHTML = "";
    
    items.forEach((item) => {
      const gambarThumb = (item.gambar && item.gambar.length > 0) ? item.gambar[0] : "./jpg/default.jpg";
      gridContainer.innerHTML += `
        <article class="kartu-sejarah">
          <div class="kartu-sejarah__media">
            <img src="${gambarThumb}" alt="${item.judul}" />
            <button class="btn-detail" type="button" data-id="${item.id}">${item.judul}</button>
          </div>
        </article>
      `;
    });
  }

  if (gridContainer) renderCards(dataSejarah);

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

        
        const petaContainer = document.getElementById("peta-lokasi");
        if (petaContainer) {
            if (data.peta) {
                petaContainer.innerHTML = `<iframe src="${data.peta}" width="100%" height="350" style="border:0; display:block;" allowfullscreen="" loading="lazy"></iframe>`;
                petaContainer.style.backgroundColor = "transparent"; 
            } else {
                petaContainer.innerHTML = "";
            }
        }

        const galeriContainer = document.getElementById("galeri-foto-container");
        if (galeriContainer) {
            galeriContainer.innerHTML = ""; // Bersihkan galeri lama
            if (data.gambar && data.gambar.length > 0) {
                data.gambar.forEach((urlFoto, index) => {
                    galeriContainer.innerHTML += `
                        <div class="galeri-card">
                            <img src="${urlFoto}" alt="Foto ${index+1}">
                            <h4>Foto Dokumentasi ${index + 1}</h4>
                        </div>
                    `;
                });
            } else {
                galeriContainer.innerHTML = "<p>Tidak ada foto dokumentasi.</p>";
            }
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