const input = require('fs').readFileSync('input.txt').toString().split(' ');
const [A, B] = input.map(Number);

console.log(B-A, B);
