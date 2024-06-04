"use strict";
// Tuples in typescript
const info1 = ["Anas", 21, true];
const info2 = ["AHmad", 10, false];
const handleUser = (user) => {
    const [name, age, isNationality] = user;
    const message = ` User Name: ${name} 
                    User Age: ${age}
                    isNationality : ${isNationality}
    `;
    return message;
};
console.log(info1);
console.log(handleUser(info1));
console.log(handleUser(info2));
const ecommerceProduct = ["Iphone 15 pro max", 55000, "White", true];
const showProduct = (product) => {
    const [name, price, color, inStock] = product;
    const message = `Product name: ${product[0]} price : ${product[1]}  , color : ${product[2]}  inStock: ${product[3]}`;
    return message;
};
console.log(showProduct(ecommerceProduct));
