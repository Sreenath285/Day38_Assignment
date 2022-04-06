const prompt = require("prompt-sync")();
let firtsNumber = prompt("Enter first number : ");
let secondNumber = prompt("Enter second number : ");

if (palindrome(firtsNumber) && palindrome(secondNumber)) {
  console.log("Given numbers are palindrome");
} else {
  console.log("Given numbers are Not palindrome");
}

function palindrome(number) {
  let reverseNumber = number.split("").reverse();
  if (number == reverseNumber.join("")) {
    return true;
  } else {
    return false;
  }
}
