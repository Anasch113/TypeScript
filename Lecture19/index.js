"use strict";
// Generics in typescript
function addNumber(a, b) {
    const message = `${a} and ${b}`;
    return message;
}
const result1 = addNumber(22, 10);
const result2 = addNumber("anas", "rafiq");
const result3 = addNumber(1, 2);
console.log(result1);
console.log(result2);
console.log(result3);
