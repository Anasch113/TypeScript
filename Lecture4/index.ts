
//Number Part

let myAge:number = 12;

let myHeight:number = 12;

let invalidResult :number = myAge + myHeight;

console.log(invalidResult)


let computedValue:number = Math.floor(16)

console.log("computedValue:", computedValue)


// String Part

let sentence:string = "Hello, this is Anas Ch";
let sentenceLength:number = sentence.length;

let sentenceUpperCase:string = sentence.toUpperCase();
let sentenceLowerCase:string = sentence.toLocaleLowerCase();

console.log("Sentence", sentence)
console.log("Length",sentenceLength)
console.log("Upper Case", sentenceUpperCase)
console.log("Lower Case", sentenceLowerCase)

// Assignments

//1st

let longText:string = "Hey! this is long text. Make it shorter"
let shortText:string = longText.slice(0,9)
console.log(shortText)


//2nd

let str1:string = "This is first sentence"
let str2:string = "This is second sentence"

let isEqual:boolean = str1===str2 ? true : false
console.log(isEqual)


//3rd

let product:string = "Headphones"
let price:number = 99

let description:string = `You can buy ${product} in just $${price}`
console.log(description)

