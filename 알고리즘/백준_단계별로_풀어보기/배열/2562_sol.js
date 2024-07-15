const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n').map(Number);

let maxNumber = input[0];
let maxIndex = 0;

for (let i=1; i<=8; i++) {
  if (input[i] > maxNumber) {
    maxNumber = input[i];
    maxIndex = i;
  }
}

console.log(maxNumber);
console.log(maxIndex + 1);