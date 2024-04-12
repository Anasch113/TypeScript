// Mastering functions, invocations, Declarations and return in typescript

function greet(name: string, id: number) {
    const message = `Hello ${name}. Your ID is ${id}`


    return message

}



const myGreet = greet("anas", 1)

console.log(myGreet)


const isPalinrome = (palin: string): boolean => {

    const myPalin = palin.split('').reverse().join('')



    return myPalin === palin

}

const palinrome = isPalinrome("12321")
console.log(palinrome)



//Assignment

// 1

const isMaximumNumber = (values: number[]): number => {


    return Math.max(...values)

}
const maximumNumber = isMaximumNumber([1, 2, 3, 4, 5, 10])
console.log(maximumNumber)

//2




const isAverage = (values: number[]) => {

    if (values.length === 0) {
        return null

    }

    const sum = values.reduce((acc, val) => acc + val, 0)
    console.log("sum:", sum)

    const average = sum / values.length
    return average



}
const average = isAverage([5, 10, 6, 8, 9])
console.log(average)