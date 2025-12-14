//Soal 1
let i = 2;
console.log("LOOPING PERTAMA");
while (i <= 20) {
  console.log(`${i} - I Love Coding`);
  i += 2;
}
i -= 2;
console.log("LOOPING KEDUA");
while (i >= 2) {
  console.log(`${i} - I Will become a mobile developer`);
  i -= 2;
}

//Soal 2
for (let j = 1; j <= 20; j++) {
  if (j % 3 == 0 && j % 2 != 0) {
    console.log(`${j} - I Love Coding`);
  } else if (j % 2 != 0) {
    console.log(`${j} - Santai`);
  } else {
    console.log(`${j} - Berkualitas`);
  }
}

//Soal 3
function makeRectangle(panjang, lebar) {
  for (let i = 1; i <= lebar; i++) {
    let hasil;
    for (let j = 1; j <= panjang; j++) {
      let symbol = "#";
      hasil = symbol.repeat(j);
    }
    console.log(hasil);
  }
}

//TEST CASE
makeRectangle(8, 4);

//Soal 4
function makeLadder(sisi) {
  for (let i = 0; i < sisi; i++) {
    let text = "#";
    console.log(text.repeat(i));
  }
}

// TEST CASE
makeLadder(7);
