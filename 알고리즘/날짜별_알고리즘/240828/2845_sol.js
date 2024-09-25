const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const [L, P] = input[0].split(' ').map(Number);

const T = L * P;

const numbers = input[1].split(' ').map(Number);

const result = [];

for (n of numbers) {
  result.push(n - T)
}

console.log(result.join(' '));