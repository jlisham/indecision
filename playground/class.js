class Person {
  constructor(name = "anon", age = 0) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `${this.name}, hello`;
  }
  desc() {
    return `${this.name} is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  desc() {
    let desc = super.desc();
    if (this.hasMajor()) {
      desc += ` Major is: ${this.major}`;
    }
    return desc;
  }
}

class Traveler extends Person {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }
  greet() {
    let greet = super.greet();
    if (this.city) {
      greet += ` I'm from ${this.city}`;
    }
    return greet;
  }
}

const me = new Traveler("tperson", 42, "Isanti");
console.log(me.greet());
const you = new Traveler(undefined, undefined, "nowhere");
console.log(you.greet());
