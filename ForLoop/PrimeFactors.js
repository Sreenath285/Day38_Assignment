const prompt = require("prompt-sync")();

const num = prompt("Enter the value of n : ");
var temp = 0;
console.log("Prime Factors are : ");
for (var i = 2; i <= num; i++) {
  if (num % i == 0) {
    for (var j = 2; j < i / 2; j++) {
      if (i % j == 0) {
        temp++;
        break;
      }
    }
    if (temp == 0) {
      console.log(i);
    }
  }
}
