// alert ('Error')

// var usia = 30 //
// const x = 2 // nilai tidak bisa diubah 
// let y = 3 // ini nilai usia nya yg di eksekusi yg paling ahkir
// console.log('heloo usia anada adalah' + usia)
// null itu tidak bernilai

// let nama = 'Rizky Putra Pratama' // integer
// let usia = 20 // string number
// let TinggiBadan = 180.5 // tipe double float
// let BeratBadan
// let Pacar = null 

// alert (
//     'nama saya ${nama} usia saya{uisa} tinngi badan saya ${TinggiBadan} status hubungan ${Pacar}'
// )

/// Contoh mengubah gambar lewat JavaScript
// function gantiGambar() {
//     let gambar = document.querySelector("img");
//     gambar.src = "gambar_lain.jpg"; // Pastikan file baru ini juga ada di folder yang sama
// }

// // Fungsi untuk mengubah tema halaman
// function toggleDarkMode() {
//     let body = document.body;
    
//     // Perintah ini akan memasُّ / mencopot kelas "dark-mode" dari tag <body>
//     body.classList.toggle("dark-mode");
// }

// // Fungsi untuk menampilkan jam digital
// function tampilkanJam() {
//     let sekarang = new Date();
//     let jam = String(sekarang.getHours()).padStart(2, '0');
//     let menit = String(sekarang.getMinutes()).padStart(2, '0');
//     let detik = String(sekarang.getSeconds()).padStart(2, '0');

//     // Gabungkan format jam:menit:detik
//     let waktuString = `${jam}:${menit}:${detik}`;

//     // Masukkan ke dalam elemen HTML dengan id "jam"
//     document.getElementById("jam").innerText = waktuString;
// }

// // Jalankan fungsi tampilkanJam setiap 1 detik (1000 milidetik)
// setInterval(tampilkanJam, 1000);

// // Panggil sekali di awal agar jam langsung muncul tanpa menunggu 1 detik
// tampilkanJam();
