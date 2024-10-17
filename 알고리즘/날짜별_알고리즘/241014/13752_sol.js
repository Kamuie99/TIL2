const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const T = Number(input[0]);

for (let i=1; i<=T; i++) {
  let temp = ''
  for (let j=0; j<Number(input[i]); j++) {
    temp += '='
  }
  console.log(temp);
}