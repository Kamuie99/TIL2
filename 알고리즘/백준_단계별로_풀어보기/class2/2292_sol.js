const input = require('fs').readFileSync('input.txt').toString().trim().split().map(Number);
let N = input[0]

let i = 2;
let plus6 = 6;
let count = 2;

while (true) {
  if (i === 1) {
    console.log(1)
    break;
  }
  if (N >= i && N < i + plus6) {
    console.log(count)
    break
  } else {
    i += plus6;
    plus6 += 6;
    count += 1;
  }
}