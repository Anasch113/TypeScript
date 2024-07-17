// Shorthand properties to write classes with access modifiers

class Persons2 {



    constructor(public name: string, public age: number, public hobbies: string[]) { }

    introduce(): string {
        return `My name is ${this.name} and I am ${this.age} years old and hobbies are ${this.hobbies.join(",")}`
    }

}

class Students2 extends Persons2 {



    constructor(name: string, age: number, hobbies: string[], public schoolName: string,) {
        super(name, age, hobbies)

    }

    introduce(): string {
        return `${super.introduce()} and my school name is ${this.schoolName}`
    }

}

const person8: Persons2 = new Persons2("anas", 20, ["read", "code"])
const person9: Persons2 = new Persons2("ali", 22, ["gaming", "gardening"])
const person10: Persons2 = new Students2("anas", 20, ["sport", "programming"], "TISS")


console.log(person8.introduce())
console.log(person9.introduce())
console.log(person10.hobbies) 