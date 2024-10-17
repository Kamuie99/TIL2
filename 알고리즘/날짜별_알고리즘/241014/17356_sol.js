const input = require('fs').readFileSync('input.txt').toString();
const [A, B] = input.split(' ').map(Number);

const M = (B - A) / 400;
const result = 1 / (1 + 10 ** M);

console.log(result);