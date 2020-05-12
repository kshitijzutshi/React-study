/*
Example:
Website for cars:

Car object => make, model and manufacturing description

*/

// ES6 classes -- Part 1     Sub classes -- Part 2

class Person {
  constructor(name = "Mandy", age = 0) {
    this.name = name || "test";
    this.age = age;
  }

  getGreeting() {
    return `Hi ${this.name}`; // ES6 template literals
  }
  getDescription(name, age = 0) {
    return `Hi may name is ${this.name} and I am ${this.age} years old.`;
  }
}
// const me = new Person("Kshitij", 26);
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting);

// To track a student and his major, Person has major so extend the class
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // calls the parent class constructor
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  // Method over ridding for added info to previous
  getDescription() {
    let desc = super.getDescription();
    if (this.hasMajor()) {
      desc += ` Their Major is ${this.major}`;
    }
    return desc;
  }
}

// const me = new Student("Kshitij", 26, "computer science");
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

/*

Task -- To create a traveller class exteding Person class 
1. add support for homeLocation
2. Over ride getGreeting sfn including homelocation if exists else print as is

*/

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting(homeLocation) {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am visiting ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveller("Kshitij", 26, "London");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
