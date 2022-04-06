"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const year = prompt("Enter the year : ");
if (year % 100 != 0 && year % 4 == 0 && year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
