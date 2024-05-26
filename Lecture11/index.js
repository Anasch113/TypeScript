"use strict";
// Add, remove from the array. Itterations methods
// Push
const cars = ["BMW", "Mercedes", "Toyota", "Honda"];
console.log(cars);
const latestCars = cars.push("Ferrari");
console.log(latestCars);
console.log(cars);
// Pop
const newCarsData = cars.pop();
console.log(newCarsData);
console.log(cars);
// Iteration through for loop
for (let i = 0; i < cars.length; i++) {
    console.log("i", i);
    console.log("cars in loop", cars[i]);
}
// Iteration thorugh for...loop
for (const car of cars) {
    console.log("for looop", car);
}
// Iteration through for each loop
cars.forEach((car) => console.log("for each", car));
