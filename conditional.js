const nilai = 90;
let grade = "";

if (nilai > 90) {
  grade = "A";
} else if (nilai > 80) {
  grade = "B";
} else if (nilai > 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log(`Nilai anda: ${grade}`);
