const input = require('fs').readFileSync('input.txt').toString().trim().split();

const inputN = Number(input[0]);

let N = 1;

let num = 666;

while (true) {
  if (inputN === 1) {
    break;
  }

  num++;

  if (String(num).includes('666')) {
    N++;
  }

  if (N === inputN) {
    console.log(num)
    break;
  }
}


