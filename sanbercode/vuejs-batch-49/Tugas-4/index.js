/* Soal No 1 */
//Contoh Input
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

//Answer
//Function untuk membongkar data
const showData = ([id, nama, tmpt_lahir, tgl_lahir, hobby]) => {
  return `
    Nomor ID:  ${id}
    Nama Lengkap:  ${nama}
    TTL:  ${tmpt_lahir} ${tgl_lahir}
    Hobi:  ${hobby}
    `;
};

//Function untuk menghandle data
const dataHandling = (input) => {
  let jawaban = "";
  input.forEach((data) => {
    jawaban += showData(data);
  });
  return jawaban;
};

//Test Console
console.log(dataHandling(input));

/* Soal No 2 */
const balikKata = (kata) => {
  let hasil = "";
  let panjangKata = kata.length - 1;
  let index = 0;
  for (panjangKata; panjangKata >= index; panjangKata--) {
    hasil += kata[panjangKata];
  }
  return hasil;
};

//Test Console
console.log(balikKata("SanberCode")); //Output : edoCrebnaS
console.log(balikKata("racecar")); //Output : racecar
