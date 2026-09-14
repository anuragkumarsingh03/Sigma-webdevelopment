const { doesNotMatch } = require("assert")
const fs = require("fs")
// const fs = require ("fs/promises")


console.log("starting")
// fs.writeFileSync("herry.txt","herry is a good boy")

fs.writeFile("anurag.txt", "Anurag is a good boy", () => {
    console.log("done")
    fs.readFile("anurag.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("anurag.txt","anurmasjgasfn", (e, d) => {
    console.log(d)
})
console.log("ending")