const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n')

const [A, B, C] = input

console.log(Number(A) + Number(B) - Number(C))
console.log(Number(A+B) - Number(C) )