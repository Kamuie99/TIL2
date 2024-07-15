const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');
const [N, X] = input[0].split(' ').map(Number);

const result = input[1].split(' ').filter((ele) => ele < X).map(Number)
console.log(result.join(' '))