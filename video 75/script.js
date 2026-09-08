console.log("Hey Anurag is a hacker")
console.log("Hey Anurag is a hecker")


setTimeout(() => {
    console.log("I am inside timeout")
}, 0);

setTimeout(() => {
    console.log("I am inside timeout 2")
}, 0);

console.log("The End")
const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Anurag");
    document.head.append(sc)

}

loadScript("components/prism-apacheconf.min.js", callback)