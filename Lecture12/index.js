"use strict";
// Map and filter method in typescript
const numbers = [12, 5, 12, 89, 89, 23];
const doubleNumber = numbers.map((value) => value * 3);
console.log(doubleNumber);
// Filter Method
const evenNumbers = numbers.filter((value) => value % 2 === 0);
console.log(evenNumbers);
