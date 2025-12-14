import { readData, register } from "./lib/fscallback";
import { login, addSiswa } from "./lib/fspromise";

let args = process.argv.splice(2);
let command = args[0];
let data = args[1];

if (command === "register") {
  let [name, password, role] = data.split(",");
  if (role === "trainer") {
    register({ name, password, role, isLogin: false, students: [] });
  } else {
    register({ name, password, role, isLogin: false });
  }
} else if (command === "login") {
  let dataUser = data.split(",");
  login(dataUser);
} else if (command === "addSiswa") {
  let dataSiswa = data.split(",");
  addSiswa(dataSiswa);
}
