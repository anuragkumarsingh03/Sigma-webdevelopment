// let obj = { 
//     a: 1,
//     b: "anurag"
// }
// console.log(obj)


// let animal ={
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }
// rabbit.__proto__ = animal;//sets rabbit [[prototype]] = animal

class animal{
    constructor(name){
        this.name = name 
        console.log("object is created")
    }
    eats (){
        console.log("kha rha hoo")

    }
    jumps (){
        console.log("kood rha hu")
    }
}

class lion extends animal{

}

let a = new animal("bunny");
console.log(a)

let l = new lion ("shera")
console.log(l)