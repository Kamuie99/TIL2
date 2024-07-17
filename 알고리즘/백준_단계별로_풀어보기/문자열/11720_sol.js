const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0])

const Numbers = input[1]

let result = 0

for (let i=0; i<N; i++) {
  result += Number(Numbers[i])
}

console.log(result)