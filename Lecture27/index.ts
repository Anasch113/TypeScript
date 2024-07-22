// Getter and setter in oops typescript




class Persons3 {

    private _age: number | undefined

    constructor(public name: string, public hobbies: string[]) { }


    // setter to set the value
    public set age(age: number) {

        if (age < 0 || age > 150) {
            throw new Error("Age not valid")
        }

        this._age = age

    }
    // getter to get the value
    public get age() {

        if (this._age === undefined) {
            throw new Error("age is not defined")
        }
        return this._age
    }



    introduce(): string {
        return `My name is ${this.name} and I am ${this._age} years old and hobbies are ${this.hobbies.join(",")}`
    }


}


const person11: Persons3 = new Persons3("anas", ["read", "code"])
const person12: Persons3 = new Persons3("ali", ["gaming", "gardening"])


// setting the value
person11.age = 15


console.log(person11.introduce())
console.log(person12.introduce())


// getting the value
console.log(person11.age)