/* Create a Business name generator by combining list of adjective and shop naem and another word

Adjctives lists :
Crazy 
Amazing 
Fire

Shops Name 
Engines
Foods
Garments

Another Words
Bros
Limited 
Hub

*/

let rand = Math.random();
let first, second, third;

// let generate the first word 
rand = Math.random();
if(rand<0.33){
  first = "Crazy";
}
else if(rand<0.66 && rand>=0.33){
  first = "Amazing";
}
else{
  first = "Fire"
}

//  let generate the second words
rand = Math.random();
if(rand<0.33){
  second = "Engines";
}
else if(rand<0.66 && rand>=0.33){
  second = "Foods";
}
else{
  second = "Garments"
}

// let generate the third word 
rand = Math.random();
if(rand<0.33){
  third = "Bros";
} 
else if(rand<0.66 && rand>=0.33){
  third = "Limited";
}
else{
  third = "Hub"
}
console.log(`${first} ${second} ${third}`)