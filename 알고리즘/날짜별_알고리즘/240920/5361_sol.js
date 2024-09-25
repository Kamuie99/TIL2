const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const field = {
  0: 350.34,
  1: 230.90,
  2: 190.55,
  3: 125.30,
  4: 180.90
}

const T = Number(input[0]);

for (let i=1; i<=T; i++) {
  const arr = input[i].split(' ').map(Number);
  let result = 0;
  for (let j=0; j<5; j++) {
    result += field[j] * arr[j]
  }
  console.log(`$${result.toFixed(2)}`)
}