console.log("hii sanjana");
"abc".toUpperCase()

function myFunction(){
    console.log("welcome to my homw");
    console.log("I am learning JS");
}
myFunction();


//special messasge or parameter
function meanFunction(abcd){//parameter (abcd)
    console.log(abcd);
}
meanFunction("I know 26 letter of english alphabate");//argument

//function of 2 sum

function sum(x, y){
    s = x + y;
    return s;
}
sum();


//sum function of Arrow function
const arrowSum = (c,d)=>{
    console.log(c + d)
};
const arrowMul = (a,b)=>{
    console.log(a*b);
};

//Practice quentions
//Q.1 Create a function using the "function" keyword that takes a string as
//an argument & return the number of vowels inthe string
function countVowels(str){
    let count = 0;
    for(const char of str ){
        if(char === "a" || char === "e" || char === "o" || char === "i" || char === "u"){
            count++;
        }
    }
    console.log(count);
}


//Q.2 create an arrow function to perform the same task
