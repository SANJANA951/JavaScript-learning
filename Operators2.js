//Arithmetic Operators
// let a = 5;
// let b = 6;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)


//modukus % 
// console.log(a%b)

//Exponentiation a res2 power
// console.log(a**b)

//Increment 
// let a = 5;
// let b = 6;

// console.log("a = ", a, "&b = ", b);
// a = a - 1;
// console.log(a)

// console.log("a++ =", a++);
// console.log("a =",a);

// console.log("a-- ", a--);
// console.log("a = ",a);


//Assignment Operators i JS

// let a = 5;
// let b = 6;

// a +=4;
// a -=4;
// a *=4;
// a %=4;
// a **=4;
// console.log("a =",a);

//Comparison Operators in JS

// let a = 5;
// let b = 6;
// console.log("5 != 5", a != b)

// ===
// console.log("a !== b",a !== b)

//>,>=  <,<=
// console.log("5>2",a>=b)
// console.log("5>2",a>=b)
// console.log("5<2",a<b)
// console.log("5<=2",a<=b)

//Logical Operators in JS

// let c = 6;
// let d = 4;

// let cond1 = c > d;
// let cond2 = c === 6; 
// console.log("cond1 && cond2 =", c < d && c === 6);
//OR ||
// console.log("cond1 && cond2 =", c < d || c === 6);

//NOT !
// console.log("cond1 && cond2 =", !(c < d));

//Conditional Statement 
// if Statement

// let age = 18;
// if(age >= 18){
//     console.log("you can vote");
// }

let age = 15;

if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you CANNOT vote");
}
;

let mode = "dark";
let color;

if (mode === "light") {
    color = "black";
}
else{
    color = "white";
}

console.log(color); // black

//else-if

let fruit = "banana";
let colour;
if(fruit === "apple"){
    colour = "red";
}
else if (fruit === "banana"){
    colour = "Yellow" 
}
else{
    colour = "green" 
}
console.log(colour)

//Tenary 

//Q.1 in notebooket person = "60";
let result = person <= 29 ? "adult" : "old";
console.log(result);

let num = prompt("Enter the number: ");
if (num % 5 ===0){
    console.log(num,"is multiple of 5");
} else{
    console.log(num,"is not multiple of 5")
}

//Q.2 Write a code which can give grades to student according to their scores
// 80-100, A, 70-89 = B, 60-69 = C, 50-59 = D, 0-49 = D

let score = 70;
let grade;
if (score >= 90 && score <=100 ){
    grade = "A";
}else if (score >= 70 && score <=89){
        grade = "B";
}else if (score >= 60 && score <=69){
        grade = "c";
}else if (score >= 50 && score <=59){
    grade = "";
}else if(score >=49 && score <= 0){
    grade = "E";
}
console.log("according to your score, your grade was : ",grade)

