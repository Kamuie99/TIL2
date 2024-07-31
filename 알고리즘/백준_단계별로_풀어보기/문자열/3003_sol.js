const input = require('fs').readFileSync('input.txt').toString().split(' ');

const chess = [1, 1, 2, 2, 2, 8]

const result = []

for (let i=0; i<input.length; i++) {
  const N = Number(input[i])
  result.push(`${chess[i] - N}`)
}

console.log(result.join(' '))