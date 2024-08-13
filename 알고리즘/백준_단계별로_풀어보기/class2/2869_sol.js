const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
const [A, B, V] = input.map(Number);

const result = Math.ceil((V-B) / (A-B));

console.log(result)