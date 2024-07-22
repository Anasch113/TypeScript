"use strict";
// Usage of generics and practice with examples
// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: any, b: any): any {
//     return a + b
// }
// Converting above overloading functions into single function using generics
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
const results = add(1, "hello", true);
const resultTwo = add("anas", "rafiq", false);
