const fs = require("fs");
const fspromise = require("fs/promises");

class KaryawanController {
  static register(req, res) {
    fs.readFile("data.json", (err, data) => {
      if (err) res.status(400).json({ errors: "Tidak dapat membaca data" });
      let resData = JSON.parse(data);
      let { name, password, role } = req.body;
      if (role === "admin") {
        resData.push({ name, password, role, isLogin: false });
      } else if (role === "trainer") {
        resData.push({ name, password, role, isLogin: false, students: [] });
      }
      fs.writeFile("data.json", JSON.stringify(resData), (err) => {
        if (err)
          res.status(400).json({ errors: "Tidak dapat memasukkan data" });
        res.status(200).json({ message: "Berhasil Register" });
      });
    });
  }

  static async login(req, res) {
    try {
      let awaitData = await fspromise.readFile("data.json");
      let resData = JSON.parse(awaitData);
      let { name, password } = req.body;
      let matchName = resData.find((item) => item.name === name);
      let matchPassword = resData.find((item) => item.password === password);
      if (matchName && matchPassword) {
        let activeAdmin = resData.filter((item) => item.isLogin);
        if (activeAdmin.length >= 1) {
          res.status(403).json({ message: "Sudah ada admin yang login" });
          return;
        }

        if (!matchName.isLogin) {
          matchName.isLogin = true;
        } else {
          res.status(200).json({ message: "Anda sudah login" });
          return;
        }
      } else {
        res.status(401).json({ message: "Data kredensial tidak benar" });
        return;
      }
      await fspromise.writeFile("data.json", JSON.stringify(resData));
      res.status(201).json({ message: "Berhasil Login" });
    } catch (error) {
      res.send(error);
    }
  }

  static findAll(req, res) {
    fs.readFile("data.json", (err, data) => {
      if (err) res.status(400).json({ errors: "Tidak dapat membaca data" });
      let resData = JSON.parse(data);
      res.status(200).json({ message: "Berhasil get karyawan", data: resData });
    });
  }

  static async addSiswa(req, res) {
    try {
      let response = await fspromise.readFile("data.json");
      let karyawan = JSON.parse(response);
      let trainer = karyawan.find(
        (trainer) =>
          trainer.name.toLowerCase() === req.params.name.toLowerCase()
      );
      if (trainer) {
        trainer.students.push(req.body);
      } else {
        res.status(404).json({ message: "Tidak dapat menemukan data trainer" });
        return;
      }

      await fspromise.writeFile("data.json", JSON.stringify(karyawan));
      res.status(201).json({ message: "Berhasil add siswa" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

module.exports = KaryawanController;
