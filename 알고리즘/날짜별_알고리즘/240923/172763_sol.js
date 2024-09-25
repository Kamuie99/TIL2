const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const field = input[1].split(' ').map(Number);

field.sort((a, b) => a -b);

console.log(field[field.length-1])