"use strict";
// Starting of OOPS in typescript. Topic : Classes in OOPS typescript
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person5 = new Persons("anas", 20, ["read", "code"]);
console.log(person5);
