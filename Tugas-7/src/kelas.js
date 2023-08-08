export class Kelas {
  constructor(name, level, instructor) {
    this._name = name;
    this._students = [];
    this._level = level;
    this._instructor = instructor;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get instructor() {
    return this._instructor;
  }

  set name(kelas_name) {
    this._name = kelas_name;
  }

  set level(lvl) {
    this._level = lvl;
  }

  set instructor(intr) {
    this._instructor = intr;
  }

  set students(Student) {
    this._students.push(Student);
  }
}
