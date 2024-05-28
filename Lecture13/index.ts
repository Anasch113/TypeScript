// Objects in typescript


const person: {
    name: string;
    age: number;
    profession: string;
    address: {
        country: string;
        state: string;
        city: string
    }
} = {
    name: "Anas",
    age: 21,
    profession: "software Engineer",
    address: {
        country: "Pakistan",
        state: "Pubjab",
        city: "Jahanian"
    }
}


console.log(person.name)