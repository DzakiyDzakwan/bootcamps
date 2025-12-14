const fs = require("fs");

class UserController {
  static findAll(req, res) {
    fs.readFile("data.json", (err, data) => {
      if (err) {
        res.status(400).json({ errors: "Gagal Mengambil data" });
      } else {
        let resdata = JSON.parse(data);
        res
          .status(200)
          .json({ message: "Berhasil Mengambil data", data: resdata.users });
      }
    });
  }

  static register(req, res) {
    fs.readFile("data.json", (err, data) => {
      if (err) res.status(400).json({ errors: "Gagal mengambil data" });
      let existingData = JSON.parse(data);
      let { users } = existingData;
      let { name, role, password } = req.body;
      let result = users.push({ name, role, password });
      let updatedData = { ...existingData };
      fs.writeFile("data.json", JSON.stringify(updatedData), (err) => {
        if (err) res.status(400).json({ errors: "Gagal menyimpan data" });
        res.status(201).json({
          message: "Berhasil menyimpan data",
          data: updatedData.users,
        });
      });
    });
  }
}

module.exports = UserController;
