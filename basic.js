// variables and data types

fullname = "sanjana saroj";
console.log(fullname);
age  = 44;
console.log(age);


let age = 34;
age = 32;
age = 23;
console.log(age);


// data types
let b = 66;
console.log(b);
typeof b;

// object
const student = {
    fullname : "sanjana saroj",
    age: 23,
    cgpas: 8.8,
    isPass: true
};
// to update varible values in the object
student["age"] = student["age"] + 1;
console.log (student.age)


student["age"] = "prince saroj";
console.log (student.name)


// to check types we can do in two ways
console.log(student["age"]);

console.log(student.age);


// 1st practice set
const product = {
    Name: "Ball Pen",
    Rating: 4,
    offer: 5,
    price: 230  
}
console.log(product);


// Q.2 prcatice set
const profile = {
    userName: "@sanjana",
    Followers: 45000,
    Post: 233,
    Info: "I am student \n Studing in Bsc CS"
}

console.log(profile);