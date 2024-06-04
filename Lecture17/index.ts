// Tuples in typescript


// Tuples is use to define the define of array like we use typeAlias for objects. Similary we use tuples to define the type of objects



type Info = readonly [
    string,
    number,
    boolean
]

const info1: Info = ["Anas", 21, true]
const info2: Info = ["AHmad", 10, false]


const handleUser = (user: Info) => {

    const [name, age, isNationality] = user

    const message = ` User Name: ${name} 
                    User Age: ${age}
                    isNationality : ${isNationality}
    `

    return message


}




console.log(info1)

console.log(handleUser(info1))
console.log(handleUser(info2))



// Challenge
type Product = readonly [string, number, string, boolean]

const ecommerceProduct: Product = ["Iphone 15 pro max", 55000, "White", true]




const showProduct = (product: Product) => {

    const [name, price, color, inStock] = product

    const message = `Product name: ${product[0]} price : ${product[1]}  , color : ${product[2]}  inStock: ${product[3]}`

    return message
}

console.log(showProduct(ecommerceProduct))