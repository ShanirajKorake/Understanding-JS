// object literals

const symbol1 = Symbol("key1")

const usr = {
    name : "shani",
    "full name" : "Shaniraj korake",
    [symbol1]: "mykey1",
    age : 18,
    location : "pune",
    email : "om@gmail.com",
    isLoggedIn : false,
    lastLoggInDate : ["Monday", "Saturday"]
}

// console.log(usr.email);
// console.log(usr["email"]);
// console.log(usr["full name"]);
// console.log(usr[symbol1]);

// usr.email = "korkeom@gmail.com"
// Object.freeze(usr)
// usr.email = "om222@gmail.com"
// console.log(usr);

usr.greeting = function() {
    console.log("hello usr");
}

usr.greeting2 = function() {
    console.log(`hello ${this.name}`);
}

usr.greeting()
usr.greeting2()
