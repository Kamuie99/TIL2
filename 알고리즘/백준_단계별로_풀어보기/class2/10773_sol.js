const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const K = Number(input[0]);

const temp = [];

for (let i=1; i<input.length; i++) {
  if (Number(input[i]) !== 0) {
    temp.push(Number(input[i]))
  } else {
    temp.pop();
  }
}

let result = 0;

if (temp.length) {
  for (t of temp) {
    result += t
  }
}

console.log(result);