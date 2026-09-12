function getData (){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(455) 

      }, 3000);
    } )


}
console.log("Loading Module")

console.log(" Do something Else")

console.log("Load data")
let data = getData()

console.log(data)

console.log("process data")
