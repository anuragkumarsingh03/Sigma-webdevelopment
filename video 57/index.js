// console.log(" I am a tutorial on loops ");

// let a = 1;

// console.log(a)
// console.log(a+1)
// console.log(a+2)
// console.log(a+3)


// for(let i = 1 ; i<100;i++){
//     console.log(i);
// }

// let obj = {
//     Name : "Anurag kumar singh",
//     Role : "Programmer",
//     Company : " CodewithHARRY",
// }
// for (const key in obj) {    
//     const element = obj[key];
//     console.log(key, element); 
// }


// for (const c of "Anurag") {
//     console.log(c)
// }


// let i = 5;
// while (i<6) {
//     console.log(i);
//     i++;  
// }


// let i = 10; 
// do {
//     console.log(i);
//     i++; 
// } while (i<6);


// Quick Question

let obj = {
    Anurag : 98,
    Fanishwar : 88,
    Aditya : 89,
}
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element)   
// }
// for (let student in obj) {
//     console.log(student + " scored " + obj[student] + " marks ")
// }

for ( let student in obj){
    console.log(student + " scored " + obj[ student ] + " marks ")
}