import { Kelas } from "./kelas";
import { Student } from "./student";
class Bootcamp {
  constructor(name) {
    this._name = name;
    this._classes = [];
  }

  get name() {
    return this._name;
  }

  get classes() {
    return this._classes;
  }

  createClass(nama_kelas, level_kelas, instruktor_kelas) {
    const kelas = new Kelas(nama_kelas, level_kelas, instruktor_kelas);
    this.classes.push(kelas);
  }

  register(kelas, newStud) {
    kelas.students = newStud;
  }
}

const sanber = new Bootcamp("sanbercode");

sanber.createClass("Laravel", "beginner", "abduh");

sanber.createClass("React", "beginner", "abdul");

console.log(sanber.classes);

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map((nama, index) => {
  let newStud = new Student(nama);
  let kelas = sanber.classes[index % 2];
  sanber.register(kelas, newStud);
});

sanber.classes.forEach((kelas) => {
  console.log(kelas);
});
