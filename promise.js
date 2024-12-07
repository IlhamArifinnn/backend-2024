/**
 * membuat fungsi download
 * @returns {object} Promise
 */
const download = () => {
  /**
   * promise dibuat menggunakan class promise
   * promise menerima callback function/executor
   * executor menerima 2 params: resolve, reject
   * reseolve dipanggil jika proses berhasil
   * reject dipanggil jika proses gagal
   */
  return new Promise((resolve, reject) => {
    const status = true;
    setTimeout(() => {
      if (status) {
        // jika proses berhasil, resolve promise dengan data yang diinginkan
        resolve("Download success");
      } else {
        // jika proses gagal, reject promise dengan pesan error
        reject("Download failed");
      }
    }, 5000);
  });
};

console.log(download());

/**
 * .then menangkap hasil resolve
 * .catch menangkap hasil reject
 */
download()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
