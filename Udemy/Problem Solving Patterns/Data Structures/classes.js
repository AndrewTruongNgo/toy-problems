class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName
    this.year = year;
    this.tardies = 0;
  }

  fullName() {
    return `Hi, my name is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.tardies++;
    if (this.tardies > 3) {
      return `${this.firstName} ${this.lastName} has been EXPELLED for being late ${this.tardies} times!!!`
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times!`
  }
}

let student = new Student('bobby', 'lee', 1);
