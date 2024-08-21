const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const Numbers = [];

for (let i=1; i<=N; i++) {
  Numbers.push(Number(input[i]));
}

Numbers.sort((a, b) => {
  return a - b;
})

console.log(Numbers.join('\n'));