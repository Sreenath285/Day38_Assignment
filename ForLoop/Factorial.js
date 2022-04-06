const reader = require("prompt-sync");
const prompt = reader();

var num = prompt("Enter number : ");
var temp = 1;

for (var i = 1; i <= num; i++) {
  temp = temp * i;
}
console.log("Factorial of " + num + " : " + temp);
