// Unions and Intersection in typescript


// Unions: If we have two sets, i.e  A = {1,2,3,4} , B = {1,2,5,6,7} , then union of two sets will be A union B = {1,2,3,4,5,6,7}


type userDetails = {

    name: string;
    age: number;

}

type employDetails = {
    department: string;
    id: number
}


type fullDetails = userDetails | employDetails;

const employ: fullDetails = {

    name: "Anas",
    age: 21
}

const userInput = (value: string | number) => {

    return typeof value === "string" ? `${value} is string` : typeof value === "number" ? `${value} is number` : "Invalid user input"
}


const employInput = (data: fullDetails) => {

    


}


console.log(userInput(12))
console.log(userInput("Anas"))


console.log(employInput(employ))