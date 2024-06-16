"use strict";
//Number Part
let myAge = 12;
let myHeight = 12;
let invalidResult = myAge + myHeight;
console.log(invalidResult);
let computedValue = Math.floor(16);
console.log("computedValue:", computedValue);
// String Part
let sentence = "Hello, this is Anas Ch";
let sentenceLength = sentence.length;
let sentenceUpperCase = sentence.toUpperCase();
let sentenceLowerCase = sentence.toLocaleLowerCase();
console.log("Sentence", sentence);
console.log("Length", sentenceLength);
console.log("Upper Case", sentenceUpperCase);
console.log("Lower Case", sentenceLowerCase);
// Assignments
//1st
let longText = "Hey! this is long text. Make it shorter";
let shortText = longText.slice(0, 9);
console.log(shortText);
//2nd
let str1 = "This is first sentence";
let str2 = "This is second sentence";
let isEqual = str1 === str2 ? true : false;
console.log(isEqual);
//3rd
let product = "Headphones";
let price = 99;
let description = `You can buy ${product} in just $${price}`;
console.log(description);
