/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("Download selesai");
      console.log(`Hasil Download: ${result}`);
      success();
    }, 100);
  });
};

/**
 * Fungsi untuk download file
 * @param {const} callback - = Function => callback show
 */
const download = () => {
  return new Promise((success) => {
    console.log("Download dimulai...");
    setTimeout(function () {
      const result = "windows-10.exe";
      success(result);
    }, 3000);
  });
};

// download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

const main = async () => {
  try {
    const result = await download();
    await showDownload(result);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

main();
