let obj = {
  firstName: 'Andrew',
  lastName: 'Ngo',

  get fullName() {
    return `${obj.firstName} ${obj.lastName}`
  },

  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

obj.fullName = "John Smith";

console.log(obj);
