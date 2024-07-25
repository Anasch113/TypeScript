// type vs interface

// We use type when to deal with objects with union and intersection. We cannot use the same type names for all type.

// We use interface when to deal with objects as well as the classes. We can extend the interface using extends words. We can also use the same name for multiple interface




// practical work



// type

// type Fruits = {
//     name: string;
//     color: string;
//     seoson: string;
// }

// type Variety = {
//     VName: string;

// }

// type Total = Fruits & Variety


// const fruitObj: Total = {

//     name: "Mango",
//     color: "yellow",
//     seoson: "summer",
//     VName: "Chonsa"

// }

// console.log(fruitObj)



// interfaces

interface Fruits {
    name: string;
    color: string;
    seoson: string;
}

interface Variety {
    VName: string;

}


interface Total extends Fruits, Variety { }


const fruitObj: Total = {

    name: "Mango",
    color: "yellow",
    seoson: "summer",
    VName: "Chonsa"


}

console.log(fruitObj)



// interfaces for oops classes

// interface Fruits {
//     name: string;
//     color: string;
//     seoson: string;
// }

// interface Variety {
//     VName: string;

// }


// interface Total extends Fruits, Variety { }


// class fruitObj implements Total {

//     constructor(public name: string, public color: string, public seoson: string, public VName: string) { }


// }

// const fruit = new fruitObj("Mango", "Yellow", "Summer", "Chonsa")

// console.log(fruit)