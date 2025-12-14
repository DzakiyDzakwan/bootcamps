import fs from "fs";

const path = "data.json";

export const readData = () => {
  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    console.log(JSON.parse(data));
  });
};

export const writeData = (data) => {
  fs.writeFile(path, JSON.stringify(data), { encoding: "utf-8" }, (err) => {
    if (err) console.log(err);
  });
};

export const register = (newData) => {
  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    let arrData = JSON.parse(data);
    arrData.push(newData);
    writeData(arrData);
    console.log("Register Berhasil");
    readData();
  });
};
