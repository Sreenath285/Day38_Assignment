const prompt = require("prompt-sync")();
console.log("Think about a number : ");
let max = 100;
let min = 0;
let mid = 0;
while (min <= max - 1) {
  let mid = Math.round((min + max) / 2);
  let choice = prompt(`Number is less than ${mid} y/n :`);
  if (choice == "y") {
    max = mid;
  } else {
    min = mid;
  }
}
console.log("Magic number : " + min);
