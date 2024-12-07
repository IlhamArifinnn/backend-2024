const persiapan = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Menyiapkan Bahan...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rebus Air...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Masak Mie...");
    }, 5000);
  });
};

/**
 * async digunakan untuk memberitahu ada proses asynchronous
 * await digunakan untuk menunggu promise selesai
 * await hanya bisa digunakan di dalam function
 */
async function main() {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
}

main();
