const input = require('fs').readFileSync('input.txt', 'utf-8').trim().split('\r\n');

const T = parseInt(input[0]);

for (let i=1; i<=T; i++) {
  const AB = input[i].split(' ');
  const A = parseInt(AB[0]);
  const B = parseInt(AB[1]);
  console.log(A+B);
}