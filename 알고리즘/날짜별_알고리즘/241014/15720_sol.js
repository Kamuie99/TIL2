const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const [B, C, D] = input[0].split(' ').map(Number);

console.log(B, C, D);