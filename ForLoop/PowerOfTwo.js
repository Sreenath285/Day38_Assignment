const prompt = require("prompt-sync")();
let number = prompt("Enter number : ");
for (let power = 1; power <= number ; power++) {
    console.log(2**power);
}