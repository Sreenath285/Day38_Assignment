const prompt = require("prompt-sync")();

const n = prompt("Enter the number : ");
var flag = 0;
for (var i = 2; i < n; i++) {
  if (n % i == 0) {
    console.log(n + " is not a prime number");
    flag++;
    break;
  }
}
if (flag == 0) {
  console.log(n + " is a prime number");
}
