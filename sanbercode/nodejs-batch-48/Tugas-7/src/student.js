export class Student {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(student_name) {
    this._name = student_name;
  }
}
