const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0]);
const [T, P] = input[2].split(' ').map(Number);
const Tshirts = input[1].split(' ').map(Number);

let resultT = 0;
let sum = 0;
let resultP = 0;
let resultP2 = 0;

for (let i=0; i<Tshirts.length; i++) {
  resultT += Math.ceil(Tshirts[i] / T)
  sum += Tshirts[i]
}

resultP = Math.floor(sum / P)
resultP2 = sum % P

console.log(resultT)
console.log(resultP, resultP2)