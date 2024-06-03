// Enums in typescript






// Enums for user

enum Role {
    user = "user",
    admin = "admin"
}


// type alias of object

type User = {

    name: string;
    email: string;
    password: string
    role: Role
}

// Object
const user1: User = {
    name: "Anas",
    email: "anas@gmail.com",
    password: "anas123",
    role: Role.admin
}
// Object2
const user2: User = {
    name: "Tuff",
    email: "tuff@gmail.com",
    password: "tuff123",
    role: Role.user
}

const login = (user: User) => {

    const message = user.role === "admin" ? `${user.name} is admin` : `${user.name} is user`

    return message

}

console.log(login(user1))
console.log(login(user2))