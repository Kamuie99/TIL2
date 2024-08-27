const input = require('fs').readFileSync('input.txt').toString();

const N = Number(input);

let max5 = parseInt(N / 5) 

for (let i=max5; i>=0; i--) {
  let left = N - (i * 5);
  if (i === 0 && left % 3 !== 0) {
    console.log(-1)
    break;
  }
  if (left % 3 === 0) {
    console.log(i + left/3)
    break;
  }
}