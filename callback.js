/** 
   Fungsi untuk format nama jadi uppercase * 
   @param {String} name
*/
function formatName(name) {
  const result = name.toUpperCase();
  return result;
}

/**
 * fungsi untuk mendapatkan nama
 *@param {String} name
 *@param {Function} callbak
 */
function getName(name, callFormatName) {
  const result = callFormatName(name);
  console.log(result);
}

getName("Ilham", formatName);

// arrow functions
console.log("\nArrow Functions");
const formatName2 = (name2) => name2.toUpperCase();
const getName2 = (name2, callFormatName2) =>
  console.log(callFormatName2(name2));

getName2("Arifin", formatName);
