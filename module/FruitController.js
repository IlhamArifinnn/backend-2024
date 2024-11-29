// import data fruit
const fruits = require("./data.js");

// membuat fungsi index
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

const store = (name) => {
  fruits.push(name);
  index();
};

// import index dan store

module.exports = {
  index,
  store,
};
