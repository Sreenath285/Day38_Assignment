const reader = require("prompt-sync");
const prompt = reader();

const a = prompt("Enter first number : ");
const b = prompt("Enter second number : ");
const c = prompt("Enter third number :  ");

arithmetic_1 = a + b * c;
arithmetic_2 = c + a / b;
arithmetic_3 = (a % b) + c;
arithmetic_4 = a * b + c;

let max = arithmetic_1;
if (max < arithmetic_2) max = arithmetic_2;
if (max < arithmetic_3) max = arithmetic_3;
if (max < arithmetic_4) max = arithmetic_4;

let min = arithmetic_1;
if (min > arithmetic_2) min = arithmetic_2;
if (min > arithmetic_3) min = arithmetic_3;
if (min > arithmetic_4) min = arithmetic_4;

console.log("Minimum value : " + min);
console.log("Maximum value : " + max);

