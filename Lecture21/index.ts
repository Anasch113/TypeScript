// Interface to define the types of objects in typescript



// type alias 

type User3 = {
    name: string;
    age: number;
}

// Interface 

interface UserInterface {
    name: string;
    age: number
}

// object


const user3: UserInterface = {

    name: "anas",
    age: 21

}


const Greet = (user3: UserInterface)=>{

  return `Name : ${user3.name} and Age : ${user3.age} `
}

console.log(Greet(user3))