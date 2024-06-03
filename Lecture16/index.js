"use strict";
// Enums in typescript
// Enums for user
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
// Object
const user1 = {
    name: "Anas",
    email: "anas@gmail.com",
    password: "anas123",
    role: Role.admin
};
// Object2
const user2 = {
    name: "Tuff",
    email: "tuff@gmail.com",
    password: "tuff123",
    role: Role.user
};
const login = (user) => {
    const message = user.role === "admin" ? `${user.name} is admin` : `${user.name} is user`;
    return message;
};
console.log(login(user1));
console.log(login(user2));
