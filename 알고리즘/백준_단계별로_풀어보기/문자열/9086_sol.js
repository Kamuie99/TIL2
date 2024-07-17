const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');
const T = Number(input[0])

for (let i=1; i<=T; i++) {
  const String = input[i]
  const S_length = String.length
  console.log(`${String[0]}${String[S_length - 1]}`)
}