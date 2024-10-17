const input = require('fs').readFileSync('input.txt').toString().split(' ');

console.log(input);

const [A, B, C] = input.map(Number);

console.log((B/A * 3) * C);