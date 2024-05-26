"use strict";
// Map and filter method in typescript
const numbers = [12, 5, 12, 89, 89, 23];
const doubleNumber = numbers.map((value) => value * 3);
console.log(doubleNumber);
// Filter Method
const evenNumbers = numbers.filter((value) => value % 2 === 0);
console.log(evenNumbers);
// Challenge
// Function to find the max value from the array
const findMaxValue = (numbers) => {
    let maximumValue = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (maximumValue < numbers[i]) {
            maximumValue = numbers[i];
        }
    }
    return maximumValue;
};
console.log(findMaxValue([4, 2, 42, 2, 3]));
