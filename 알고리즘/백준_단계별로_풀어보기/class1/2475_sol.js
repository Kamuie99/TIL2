const input = require('fs').readFileSync('input.txt').toString().trim().split(' ')
let inputSum = 0;
for (let i=0; i<input.length; i++) {
  inputSum += Number(input[i])**2
}

console.log(inputSum % 10)