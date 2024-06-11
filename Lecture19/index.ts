// Generics in typescript




function addNumber<type>(a: type, b: type) {
    const message = `${a} and ${b}`
    return message

}


const result1 = addNumber<number>(22, 10)
const result2 = addNumber<string>("anas", "rafiq")
const result3 = addNumber<number>(1, 2)

console.log(result1)
console.log(result2)
console.log(result3)