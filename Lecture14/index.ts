// Type Alias

type thing = {
    name: string;
    price: number,
    quantity: number
}


const things: thing = {
    name: "Mobile",
    price: 5000,
    quantity: 10,

}


const things2: thing = {
    name: "Earbuds",
    price: 500,
    quantity: 30,
}


const things3: thing = {
    name: "Speakers",
    price: 800,
    quantity: 20,
}

console.log(things)
console.log(things2)
console.log(things3)


const calculation = (things: thing) => {

    const result = `${things.name} total price are ${things.price * things.quantity} `

    return result


}

console.log(calculation(things))