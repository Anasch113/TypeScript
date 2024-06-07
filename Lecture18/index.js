"use strict";
// Unions and Intersection in typescript
const employ = {
    name: "Anas",
    age: 21,
    department: "IT",
    id: 23920
};
const userInput = (value) => {
    return typeof value === "string" ? `${value} is string` : typeof value === "number" ? `${value} is number` : "Invalid user input";
};
const employInput = (data) => {
    return `Name is ${data.name}, age is ${data.age}, department is ${data.department} and id is ${data.id}`;
};
// console.log(userInput(12))
// console.log(userInput("Anas"))
console.log(employInput(employ));
const createUserProfile = (data) => {
    const message = ` name : ${data.name}
                       age : ${data.age}
                       email : ${data.email}
                       Number : ${data.phone}
                       Country : ${data.country}
                       state : ${data.state}
                       city : ${data.city}
                       postal code : ${data.postalCode}
                       address : ${data.address}
    
    `;
    return message;
};
const user = {
    name: "Anas",
    age: 21,
    email: "anasch@gmail.com",
    phone: 294243039284092,
    country: "Pakistan",
    state: "punjab",
    city: "Jahanian, Multan",
    postalCode: 58200,
    address: "Chak no 113 10-R",
};
console.log(createUserProfile(user));
