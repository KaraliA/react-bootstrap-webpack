import React from "react";
import ReactDOM from "react-dom";


const UserAPI = {
users: [ {
        firstName: "Arina",
        lastName: "Karali",
        userName: "AKarali",
        password: "311",
        email: "example@gmail.com"
    }, {
        firstName: "Yana",
        lastName: "Marienko",
        userName: "YMarienko",
        password: "312",
        email: "example@gmail.com"
    }, {
        firstName: "Max",
        lastName: "Gromov",
        userName: "MGromov",
        password: "313",
        email: "example@gmail.com"
    }, {
        firstName: "Ivan",
        lastName: "Karaev",
        userName: "IKaraev",
        password: "314",
        email: "example@gmail.com"
    }, {
        firstName: "Yan",
        lastName: "Markov",
        userName: "YanMar",
        password: "315",
        email: "example@gmail.com"
    }, {
        firstName: "Anna",
        lastName: "Ivanova",
        userName: "AIvanova",
        password: "316",
        email: "example@gmail.com"
    }, {
        firstName: "Marina",
        lastName: "Petrova",
        userName: "MPetrova",
        password: "317",
        email: "example@gmail.com"
    }, {
        firstName: "Katya",
        lastName: "Hordienko",
        userName: "KHordienko",
        password: "318",
        email: "example@gmail.com"
    }, {
        firstName: "Maxim",
        lastName: "Karlash",
        userName: "MKarlash",
        password: "319",
        email: "example@gmail.com"
    }, {
        firstName: "Mykola",
        lastName: "Kovtun",
        userName: "MKovtun",
        password: "320",
        email: "example@gmail.com"
    }, {
        firstName: "Yaroslav",
        lastName: "Isaev",
        userName: "YIsaev",
        password: "321",
        email: "example@gmail.com"
    }, {
        firstName: "Alina",
        lastName: "Horbenko",
        userName: "AHorbenko",
        password: "322",
        email: "example@gmail.com"
    } ], 
get: function(userName) {
    const isUser = u => u.userName === userName
    return this.users.find(isUser)
    },
save: function(newUser, userName) {
    const oldUser = this.get(userName);
    oldUser.firstName = newUser.firstName;
    oldUser.lastName = newUser.lastName;
    oldUser.email = newUser.email;
    oldUser.userName = newUser.userName;
    oldUser.password = newUser.password;
}
};

export { UserAPI };
