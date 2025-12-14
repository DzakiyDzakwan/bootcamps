function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];

  let hasil = [];
  arrPenumpang.forEach(([nama, asal, tujuan]) => {
    const jarak = rute.indexOf(tujuan) - rute.indexOf(asal);
    const penumpang = {
      penumpang: nama,
      naikDari: asal,
      tujuan: tujuan,
      bayar: jarak * 2000,
    };
    hasil.push(penumpang);
  });

  return hasil;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
