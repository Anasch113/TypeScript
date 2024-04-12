// Mastering functions, invocations, Declarations and return in typescript
function greet(name, id) {
    var message = "Hello ".concat(name, ". Your ID is ").concat(id);
    return message;
}
var myGreet = greet("anas", 1);
console.log(myGreet);
var isPalinrome = function (palin) {
    var myPalin = palin.split('').reverse().join('');
    return myPalin === palin;
};
var palinrome = isPalinrome("12321");
console.log(palinrome);
//Assignment
// 1
var isMaximumNumber = function (values) {
    return Math.max.apply(Math, values);
};
var maximumNumber = isMaximumNumber([1, 2, 3, 4, 5, 10]);
console.log(maximumNumber);
//2
var isAverage = function (values) {
    if (values.length === 0) {
        return null;
    }
    var sum = values.reduce(function (acc, val) { return acc + val; }, 0);
    console.log("sum:", sum);
    var average = sum / values.length;
    return average;
};
var average = isAverage([5, 10, 6, 8, 9]);
console.log(average);
