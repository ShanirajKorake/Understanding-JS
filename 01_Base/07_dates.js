let d1 = new Date()
// console.log(d1);
// console.log(d1.toString());
// console.log(d1.toDateString());
// console.log(d1.toISOString());
// console.log(d1.toJSON());
// console.log(d1.toLocaleString());
// console.log(d1.toLocaleDateString());





// let aD1 = new Date(2024, 5, 15)
// let aD1 = new Date(2024, 5, 15, 13, 30)
// let aD1 = new Date("2005-6-15")
let aD1 = new Date("6-15-2005")

// console.log(aD1.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "narrow"
    
})