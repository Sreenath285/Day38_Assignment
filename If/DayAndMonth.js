"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const date = prompt("Enter the date : ");
const month = prompt("Enter the month : ");
let flag = true;
if (month >= 3 && month <= 6) {
  if (month == 3 && date < 20) {
    flag = false;
  }
  if (date > 20 && month == 6) {
    flag = false;
  }
  if (flag == false) {
    console.log("Invalid date");
  } else {
    console.log("Valid date");
  }
} else {
  console.log("Invalid date");
}
