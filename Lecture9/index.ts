// Default and Optional Parameters in functions

// Default Parameter
const greet2 = (name: string, id: number) => {
    const message = `Hello ${name}, your ID is ${id}`
    return message
}
const funGreet = greet2("anas", 1)




// optional Parameter
const greet3 = (name: string, id?: number) => {
   

    if (!id) {
        const message = `Hello ${name} , your id is not assigned yet`
        return message
    }
    else {
        const message = `Hello ${name}, your ID is ${id}`
        return message
    }

    
}
const funGreet2 = greet3("anas")

console.log(funGreet2)