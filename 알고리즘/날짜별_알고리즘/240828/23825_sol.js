const input = require('fs').readFileSync('input.txt').toString();

const [N, M] = input.split(' ');

console.log(parseInt(Math.min(N, M) / 2))