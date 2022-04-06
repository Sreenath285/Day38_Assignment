const prompt = require("prompt-sync")();

const startNumber = prompt("Enter start number : ");
const endNumber = prompt("Enter end number : ");

if (endNumber > startNumber) {
  if (startNumber == 1) {
    console.log("Not Prime");
  } else {
    for (let i = startNumber; i <= endNumber; i++) {
      for (let j = 2; j <= i; j++) {
        if (j == i) {
          console.log("Prime number : " + i);
        }
        if (i % j == 0) break;
      }
    }
  }
}
