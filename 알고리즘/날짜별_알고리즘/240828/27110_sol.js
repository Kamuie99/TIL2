const input = require('fs').readFileSync('input.txt').toString().split('\r\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let result = 0;

for (num of numbers) {
  if (num > N) {
    result += N;
  } else {
    result += num
  }
}

console.log(result)