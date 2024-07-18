const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n')

for (let i=0; i<input.length; i++) {
  console.log(input[i])
}