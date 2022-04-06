const prompt = require("prompt-sync")();
let number = prompt("Enter number : ");
let harmonic = 0
for (let n = 1; n <= number ; n++) {
    harmonic += 1/n
}
console.log("Harmonic value : " + harmonic);