// const name = "sanjana";
// let age = 20;
// let hasID = true;
// if(age >= 18 && hasID){
//     console.log("Allowed");
// }

// let marks = 80;
// if(marks >= 35 && marks < 75){
//     console.log("Pass");
// }else if (marks >= 75){
//     console.log("Distinction");
// }else{
//     console.log("Fail");

// }

// for (let i = 1; i <= 10; i++){
//     console.log( 1 * 2);
// }

const sales = "Toyota";
function carTypes(name){
    return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}
const car = {myCar: "Saturn", getCar: carTypes("Honda"), special:sales};
console.log(car.myCar)
console.log(car.getCar)
console.log(car.special)