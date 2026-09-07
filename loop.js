

console.log("Sanjana Saroj")
for(let count=1; count<=5; count++ ){
    console.log("sanjana saroj");
}
console.log("loop as ended");

//To calculate sum of 1 to 5
let sum = 0;
for( let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum =",sum);
console.log("loop as ended")

//print 1 to 5
for(let i = 1; i <= 5; i++){
    console.log("i = ", i);
}
//while loop
let i = 1;
while(i<=5){
    console.log("shelu ",i);
    i++;
}

let j = 20;
do{
    console.log("saroj");
    i++;
}while(i<=10);

//do while loop
let m = 1;
do{
    console.log("Meers saroj",i);
    i++;
}while(i<=5);

//for off loop

// let str = "india"
// for(let n of str){
//     console.log(n);
// }

//for in loop
let student = {
    name: "Sanjana Saroj",
    age: 22,
    cgpa: 8.8,
    isPass: true
};
for(let i in student){
    console.log(student[i]);
}


//Practice Questions
//Q.1 Print all even number frpom 0 to 100.

for(let num = 0; num<=100; num++){
    if(num%2 !== 0){//for even number === and for odd number !==
        console.log("num = ",num);
    }
}

//Q.2 Create a game where you start wih any random game number .Ask the user to keep gussing the game number until the user enters correct valur
let gameNumber = 25;
let userNum = prompt("Guess the game number : ");

while(userNum != gameNumber){  //while writing promp it only required one equals to not this !==
   userNum =  prompt("You enter wrong  number. Guess again : ");
}
console.log("Congratulations, you entered the right number")



