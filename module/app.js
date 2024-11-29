// import fruitController
const { index, store } = require("./FruitController");

// buat fungsi utama: main
const main = () => {
  // memanggil fungsi index
  index();
  console.log("----------------");

  store("melon");
};

main();
