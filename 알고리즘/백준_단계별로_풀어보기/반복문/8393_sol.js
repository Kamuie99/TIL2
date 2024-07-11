const input = require('fs').readFileSync('input.txt', 'utf-8').trim().split();
const N = parseInt(input)

console.log((1+N) * N / 2)