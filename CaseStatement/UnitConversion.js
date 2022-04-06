"use strict";

const reader = require("prompt-sync");
const prompt = reader();
const number = prompt("Enter the number : ");

while (true) {
    let feetToInch = (number * 12 + " inch");
    let inchToFeet = (number / 12 + " feet");
    let feetToMeter = (number * 0.30 + " meter");
    let meterToFeet = (number * 3.28 + " feet");
    console.log("1. Feet to Inch");
    console.log("2. Inch to Feet");
    console.log("3. Feet to Meter");
    console.log("4. Meter to Feet");
    const choice = prompt("Enter choice :")

    switch (choice) {
        case '1':
            console.log(feetToInch);
            break;
        case '2':
            console.log(inchToFeet);
            break;
        case '3':
            console.log(feetToMeter);
            break;
        case '4':
            console.log(meterToFeet);
            break;
        default:
            console.log("Invalid input");
    }
}