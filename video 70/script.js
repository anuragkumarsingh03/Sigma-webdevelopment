console.log("Anurag Kumar singh");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[0].style.backgroundColor = "red"
boxes[0].style.color = "white";
boxes[1].style.backgroundColor = "green"
boxes[1].style.color = "pink";
boxes[2].style.backgroundColor = "yellow"
boxes[2].style.color = "red";c
boxes[3].style.backgroundColor = "pink"
boxes[3].style.color = "blue";
boxes[4].style.backgroundColor = "blue"
boxes[4].style.color = "yellow";


// Function to generate random color in HEX
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // Select all boxes
// const boxes = document.querySelectorAll(".box");

// // Assign random text color and background color
// boxes.forEach(box => {
//   box.style.backgroundColor = getRandomColor(); // random background
//   box.style.color = getRandomColor();           // random text color
//   box.textContent = "Box";                      // add label
// });
