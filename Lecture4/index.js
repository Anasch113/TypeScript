//Number Part
var myAge = 12;
var myHeight = 12;
var invalidResult = myAge + myHeight;
console.log(invalidResult);
var computedValue = Math.floor(16);
console.log("computedValue:", computedValue);
// String Part
var sentence = "Hello, this is Anas Ch";
var sentenceLength = sentence.length;
var sentenceUpperCase = sentence.toUpperCase();
var sentenceLowerCase = sentence.toLocaleLowerCase();
console.log("Sentence", sentence);
console.log("Length", sentenceLength);
console.log("Upper Case", sentenceUpperCase);
console.log("Lower Case", sentenceLowerCase);
// Assignments
var longText = "Hey! this is long text. Make it shorter";
var shortText = longText.slice(0, 9);
console.log(shortText);
var str1 = "This is first sentence";
var str2 = "This is second sentence";
var isEqual = str1 === str2 ? true : false;
console.log(isEqual);
var product = "Headphones";
var price = 99;
var description = "You can buy ".concat(product, " in just $").concat(price);
console.log(description);
