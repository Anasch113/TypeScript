"use strict";
// Shorthand properties to write classes with access modifiers
class Persons2 {
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
class Students2 extends Persons2 {
    schoolName;
    constructor(name, age, hobbies, schoolName) {
        super(name, age, hobbies);
        this.schoolName = schoolName;
    }
    introduce() {
        return `${super.introduce()} and my school name is ${this.schoolName}`;
    }
}
const person8 = new Persons2("anas", 20, ["read", "code"]);
const person9 = new Persons2("ali", 22, ["gaming", "gardening"]);
const person10 = new Students2("anas", 20, ["sport", "programming"], "TISS");
console.log(person8.introduce());
console.log(person9.introduce());
console.log(person10.hobbies);
