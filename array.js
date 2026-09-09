// let marks = [99,78,96,89];
// console.log(marks);
// console.log(marks.length);


let anime = ["naruto","bluelock","demon slayer","ponyo"];
//using for loop
// for(let i = 0; i < anime.length; i++){
//     console.log(anime[i]);
// }
 //for of
 for(let el of anime){
    console.log(el)
 }

 let city = ["mumbai","delhi","indore","banglore","hyderabad","gurgaon"];
 for(let citi of city){
    console.log(citi.toUpperCase());
 }

 //practice question
 //Q.1 for a given array with marks of students ->[85,97,44,37,76,60] find the average marks of the entire class
 let mark = [85,97,44,37,76,60];
 let sum = 0;
 for(let val of mark){
    sum += val;
 }

 let avg = sum / mark.length;
 console.log(avg);


 //Q.2 for a givem array with prices of item -> [250.645,300,900,50]
 //all items have an offer of 10% OFF on them. change the array to stores final price after applying offer.
//  let items = [250,645,300,900,50];
//  for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
//  }
//  console.log(items);

 //methopd in JS Push  Pop toStrings
 let fooditem = ["apple","banana","chickoo","papaya","orange","pineapple","gavava"];
//  fooditem.push("grapes","strayberry");
//  fooditem.pop();
//  console.log(fooditem);

 //tosting to convert array in string
//  console.log(fooditem.toString());

 //concat in array
//  let game = ["subway","candycrash","freefire","drving"];
//  let social = ["instagram","spotify","whatsaap","facebook"];
//  let app = game.concat(social);
//  console.log(app);


 //Q.3 Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
 //a.Remove the fisrt company from the array
 //b.Remove Uber and add Ola in its place
 //c.Add Amazon at the end

 let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
//  companies.shift()
 companies.splice(2,1,"Ola")
 companies.push("Amazon ")
 console.log(companies)

