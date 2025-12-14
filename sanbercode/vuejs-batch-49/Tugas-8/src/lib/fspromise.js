import fspromise from "fs/promises";
import { readData } from "./fscallback";
import "core-js/stable";
import "regenerator-runtime/runtime";

const path = "data.json";

export const login = (dataLogin) => {
  let [username, password] = dataLogin;
  fspromise
    .readFile(path)
    .then((data) => {
      let res = JSON.parse(data);
      for (const user of res) {
        if (user.name === username && user.password === password) {
          user.isLogin = true;
        }
      }
      return fspromise.writeFile(path, JSON.stringify(res));
    })
    .then(() => {
      console.log("Berhasil Login");
      readData();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addSiswa = async (data) => {
  let res = await fspromise.readFile(path);
  let response = JSON.parse(res);
  let isAdmin = false;
  let [student, trainer] = data;

  for (const user of response) {
    if (user.role === "admin" && user.isLogin === true) {
      isAdmin = true;
    }
    if (isAdmin) {
      if (user.name === trainer && user.role === "trainer") {
        user.students.push({ name: student });
      }
    }
  }

  await fspromise.writeFile(path, JSON.stringify(response));
  console.log("Berhasil Add Siswa");
  readData();
};
