// const appUsr = new Object();
const appUsr = {}

appUsr.Id = "123abc"
appUsr.name = "shani"
appUsr.isLogined = false

// console.log(appUsr);

const regUsr = {
    email : "om@gmail.com",
    fullName : {
        usrFullName : {
            firstName : "om",
            lastName : "korke"
        }
    }
}

// console.log(regUsr.fullName.usrFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(appUsr);

// console.log(Object.keys(appUsr));
// console.log(Object.values(appUsr));
// console.log(Object.entries(appUsr));

// console.log(appUsr.hasOwnProperty('isLogined'));



const {name: n1} = appUsr
console.log(n1);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]