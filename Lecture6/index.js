// Any and Unknown types
//Any 
var num = 1;
num = 2;
num = "anas";
num = true;
console.log(num);
// Unknown
var number1 = 12;
number1 = "anas";
number1 = true;
if (typeof number1 === "number") {
    console.log("it is number");
}
else if (typeof number1 === "boolean") {
    console.log("is is boolean also");
}
