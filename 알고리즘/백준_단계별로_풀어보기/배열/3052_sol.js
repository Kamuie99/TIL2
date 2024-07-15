const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n').map(Number);

const result = [];

for (i of input) {
  let num = i % 42;
  result.push(num) 
}

const arrayToSet = [...new Set(result)];

console.log(arrayToSet.length)