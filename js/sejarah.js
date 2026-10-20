
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
        deskripsi: "Situs Karangkamulyan (sering disebut sebagai Situs Ciung Wanara) adalah objek wisata sejarah, budaya, dan arkeologi yang terletak di Desa Karangkamulyan, Kecamatan Cijeungjing, Kabupaten Ciamis, Jawa Barat. Kawasan ini diyakini sebagai pusat pemerintahan Kerajaan Galuh (abad ke-7 hingga ke-14 Masehi) serta erat kaitannya dengan legenda rakyat Sunda tentang Ciung Wanara."
    },
    {
        judul: "Situs Astana Gede Kawali",
        gambar: "./jpg/astana-gede-kawali.jpeg",
        deskripsi: "Situs Astana Gede Kawali adalah kompleks cagar budaya sekaligus situs sejarah yang terletak di Dusun Indrayasa, Desa Kawali, Kecamatan Kawali, Kabupaten Ciamis, Jawa Barat. Berada di lahan hutan lindung seluas sekitar 5 hektare di kaki Gunung Sawal, kawasan ini dahulu merupakan ibu kota Kerajaan Galuh (sekitar abad ke-14 Masehi) dengan keratonnya yang bernama Surawisesa."
                    +"\nSebagai salah satu pusat peradaban Sunda kuno, situs ini sangat unik karena menyimpan peninggalan dari tiga periode sekaligus: prasejarah, klasik (Hindu-Buddha), hingga masa penyebaran Islam."
    },
    {
        judul: "Situs Jambansari",
        gambar: "./jpg/situs-jambansari.jpg",
        deskripsi: "Kompleks makam keluarga Bupati Ciamis terdahulu, khususnya Raden Tumenggung Aria (R.A.A.) Kusumadiningrat (Kanjeng Prebu) yang memimpin Ciamis pada abad ke-19, lengkap dengan museum benda-benda pusaka sejarah."
    },
    {
        judul: "Situs Gunung Susuru",
        gambar: "./jpg/situs-jambansari.jpg",
        deskripsi: "Kompleks makam keluarga Bupati Ciamis terdahulu, khususnya Raden Tumenggung Aria (R.A.A.) Kusumadiningrat (Kanjeng Prebu) yang memimpin Ciamis pada abad ke-19, lengkap dengan museum benda-benda pusaka sejarah."
    }
];


const kartuSejarah = document.querySelectorAll(".kartu-sejarah");

// Ketika kartu diklik
kartuSejarah.forEach(function(kartu) {
    kartu.addEventListener("click", function() {

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
tombolKembali.addEventListener("click", function() {
    detailSejarah.hidden = true;
    daftarSejarah.hidden = false;

    window.scrollTo(0, 0);
});
