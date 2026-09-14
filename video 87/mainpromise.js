import fs from "fs/promises"

let a = await fs.readFile("anurag.txt")
let b = fs.appendFile("anurag.txt","\n\n\n\n This is amazing promises")

console.log(a.toString())
