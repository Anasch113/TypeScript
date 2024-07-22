"use strict";
// Inheritance in OOPS Typescript
class Personss {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old and hobbies are ${this.hobbies.join(",")}`;
    }
}
class Students extends Personss {
    schoolName;
    constructor(name, age, hobbies, schoolName) {
        super(name, age, hobbies);
        this.schoolName = schoolName;
    }
    introduce() {
        return `${super.introduce()} and my school name is ${this.schoolName}`;
    }
}
const person1 = new Personss("anas", 20, ["read", "code"]);
const person2 = new Personss("ali", 22, ["gaming", "gardening"]);
const person3 = new Students("anas", 20, ["sport", "programming"], "TISS");
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
