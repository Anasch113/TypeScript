//Boolean Types In TypeScript
var isFull = true;
function isDivisibleBy4and8(a) {
    return a % 4 === 0 && a % 8 === 0;
}
console.log(isDivisibleBy4and8(4));
// BigInt Types In TypeScript
// let maxSafeNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxSafeNumber)
var maxNumber = 9007199254740991n;
console.log(maxNumber);
var anotherBigNumber = BigInt("900719925474099220");
console.log(anotherBigNumber);
var sumOfBigNumbers = maxNumber + anotherBigNumber;
console.log(sumOfBigNumbers);
