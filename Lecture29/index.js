"use strict";
// Static method to define the properties and functions in class
class MathOperations {
    static PI = Math.PI;
    static multiply(a, b) {
        return a + b;
    }
    static division(a, b) {
        return a / b;
    }
    static modules(a, b) {
        return a % b;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.multiply(2, 2)); // output = 4
console.log(MathOperations.division(10, 5)); // output = 2
console.log(MathOperations.modules(18, 4)); // output =  2
