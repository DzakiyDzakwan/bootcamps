var express = require("express");
var router = express.Router();

/* Controller */
const KaryawanController = require("../controllers/karyawan");

/* GET All Karyawab */
router.get("/", KaryawanController.findAll);

/* Add Siswa */
router.post("/:name/siswa", KaryawanController.addSiswa);

module.exports = router;
