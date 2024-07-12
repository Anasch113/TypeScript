// Inheritance in OOPS Typescript



class Personss {

    name: string;
    age: number;
    hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

    introduce(): string {
        return `My name is ${this.name} and I am ${this.age} years old and hobbies are ${this.hobbies.join(",")}`
    }

}

class Students extends Personss {

    schoolName: string

    constructor(name: string, age: number, hobbies: string[], schoolName: string) {
        super(name, age, hobbies)

        this.schoolName = schoolName
    }

    introduce(): string {
        return `${super.introduce()} and my school name is ${this.schoolName}`
    }

}

const person1: Personss = new Personss("anas", 20, ["read", "code"])
const person2: Personss = new Personss("ali", 22, ["gaming", "gardening"])
const person3: Personss = new Students("anas", 20, ["sport", "programming"], "TISS")


console.log(person1.introduce())
console.log(person2.introduce())
console.log(person3.introduce())