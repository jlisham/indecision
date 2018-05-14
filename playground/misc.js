class Oldway {
  constructor() {
    this.name = "tperson";
    this.greet = this.greet.bind(this);
  }
  greet() {
    return `hello, ${this.name}`;
  }
}
const oldway = new Oldway();
const old = oldway.greet;
console.log(old());

class Newway {
  name = "Joe";
  greet() {
    return `hello, ${this.name}`;
  }
}

const newway = new Newway();
console.log(newway.greet());
