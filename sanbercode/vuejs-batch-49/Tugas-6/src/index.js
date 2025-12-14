import { sapa } from "./lib/soal1.js";
import { convert } from "./lib/soal2.js";
import { checkScore } from "./lib/soal3.js";

const command = process.argv[2];
const nama = process.argv[3];
//process.argv[2] mengambil argumen indeks-2 dari command yang diberi;
// Example 'node dist test code' = 'test'.

switch (command) {
  case "sapa":
    console.log(sapa(process.argv[3]));
    break;

  case "convert":
    console.log(convert(process.argv[3], process.argv[4], process.argv[5]));
    break;

  case "checkScore":
    console.log(checkScore(process.argv[3]));
    break;

  default:
    break;
}
