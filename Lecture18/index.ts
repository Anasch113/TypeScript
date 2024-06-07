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


type fullDetails = userDetails & employDetails;

const employ: fullDetails = {

    name: "Anas",
    age: 21,
    department: "IT",
    id: 23920


}

const userInput = (value: string | number) => {

    return typeof value === "string" ? `${value} is string` : typeof value === "number" ? `${value} is number` : "Invalid user input"
}


const employInput = (data: fullDetails) => {

    return `Name is ${data.name}, age is ${data.age}, department is ${data.department} and id is ${data.id}`



}


// console.log(userInput(12))
// console.log(userInput("Anas"))


console.log(employInput(employ))





// Challenge


type userInfo = {
    name: string;
    age: number;
    email: string;
    phone: number

}


type locationInfo = {
    country: string;
    state: string;
    city: string;
    postalCode: number;
    address: string;
}

type fullInfo = userInfo & locationInfo

const createUserProfile = (data: fullInfo) => {


    const message = ` name : ${data.name}
                       age : ${data.age}
                       email : ${data.email}
                       Number : ${data.phone}
                       Country : ${data.country}
                       state : ${data.state}
                       city : ${data.city}
                       postal code : ${data.postalCode}
                       address : ${data.address}
    
    `


    return message
}


const user = {
    name: "Anas",
    age: 21,
    email: "anasch@gmail.com",
    phone: 294243039284092,
    country: "Pakistan",
    state: "punjab",
    city: "Jahanian, Multan",
    postalCode: 58200,
    address: "Chak no 113 10-R",



}


console.log(createUserProfile(user))