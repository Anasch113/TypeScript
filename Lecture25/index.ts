// Access Modifiers (Public, Protected & Private)


// Acess Modefiers: They specify the access of variables in parent class, child class and outside class

// Names                     Parent Class              Child Class              Outside Class
// public                       Yes                       Yes                      Yes
// protected                    Yes                       Yes                      No
// private                      Yes                       No                       No



class Personsss {

    public name: string;
    public age: number;
    private hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

    introduce(): string {
        return `My name is ${this.name} and I am ${this.age} years old and hobbies are ${this.hobbies.join(",")}`
    }

}

class Studentss extends Personss {

    schoolName: string

    constructor(name: string, age: number, hobbies: string[], schoolName: string) {
        super(name, age, hobbies)
        this.hobbies = hobbies

        this.schoolName = schoolName
    }

    introduce(): string {
        return `${super.introduce()} and my school name is ${this.schoolName}`
    }

}

const person4: Personsss = new Personsss("anas", 20, ["read", "code"])
const person7: Personsss = new Personsss("ali", 22, ["gaming", "gardening"])
// const person6: Personsss = new Studentss("anas", 20, ["sport", "programming"], "TISS") not accessible becasue it is private


console.log(person4.introduce())
console.log(person7.introduce())
// console.log(person6.hobbies) not accessible becasue it is private