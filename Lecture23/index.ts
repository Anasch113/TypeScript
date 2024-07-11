// Starting of OOPS in typescript. Topic : Classes in OOPS typescript



class Persons {

    name: string;
    age: number;
    hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

}

const person5 : Persons = new Persons( "anas",  20 , ["read", "code"])


console.log(person5)