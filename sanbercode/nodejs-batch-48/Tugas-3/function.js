/* Soal No 1 */

function teriak() {
  return "Halo Sanbers!";
}

console.log(teriak());

/* Soal No 2 */
function kalikan(num1, num2) {
  return num1 * num2;
}

console.log(kalikan(4, 12)); //48
console.log(kalikan(25, 25)); //625

/* Soal No 3 */
function introduce(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

// TEST CASES
console.log(introduce("Agus", 30, "Jogja", "Gaming")); //"Nama saya Agus, umur saya 30 tahun, alamat saya di Jogja, dan saya punya hobby yaitu Gaming!"
