"use strict";
// Interface to define the types of objects in typescript
// object
const user3 = {
    name: "anas",
    age: 21
};
const Greet = (user3) => {
    return `Name : ${user3.name} and Age : ${user3.age} `;
};
console.log(Greet(user3));
