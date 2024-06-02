"use strict";
// Call Signatures
const student = {
    name: "Anas",
    age: 21,
    greet: (country) => `Student name is ${student.name} and his/her age is ${student.age} from ${country}`
};
const student2 = {
    name: "Anas",
    age: 21,
    greet: (country) => `Student name is ${student2.name} and his/her age is ${student2.age} from ${country}`
};
const studentFunction = (student) => {
    const message = `Student name is ${student.name} and his/her age is ${student.age}`;
    return message;
};
console.log(studentFunction(student));
console.log(student.greet("Pakistan"));
console.log(student2.greet("Palistine"));
