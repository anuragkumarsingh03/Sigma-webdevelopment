/* Create a Faulty calculator using JavaScript 

This Faulty Calculator does following 
1. It takes two numbers from users 
2. It performs wrong information as follows 
    + -----> -
    - -----> /
    * -----> +
    / -----> **
It performs wrong opration of the 10% times.

*/

let random = Math.random()
let a = prompt("Enter First number : ");
let b = prompt("Enter Second number : ");
let c = prompt("Enter operation : ");

let obj = {
    "=" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**",
}


if(random>0.1){

}