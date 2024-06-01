"use strict";
// Type Alias
const things = {
    name: "Mobile",
    price: 5000,
    quantity: 10,
};
const things2 = {
    name: "Earbuds",
    price: 500,
    quantity: 30,
};
const things3 = {
    name: "Speakers",
    price: 800,
    quantity: 20,
};
console.log(things);
console.log(things2);
console.log(things3);
const calculation = (things) => {
    const result = `${things.name} total price are ${things.price * things.quantity} `;
    return result;
};
console.log(calculation(things));
