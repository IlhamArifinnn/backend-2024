// 1
console.log("Satu");

setTimeout(function () {
  console.log("Dua");
}, 3000);

console.log("Tiga");

// 2
console.log("Ipin membuka browser google Chrome");

/**
 * setTimeout salah satu operasi Asynchronous.
 * fungsi setTimeout tidak mencegah operasi selanjutnya.
 * callback otomatis dijalankan setelah 5 detik.
 */
setTimeout(() => {
  console.log("Mendowload file selama 1 jam");
  console.log("Download selesai");
}, 5000);

console.log("Ipin membuka Youtube");
