// const input = require('fs').readFileSync('input.txt').toString().trim().split();

// const inputN = Number(input[0]);

// let N = 1;

// let num = 666;

// while (true) {
//   if (inputN === 1) {
//     break;
//   }

//   num++;

//   if (String(num).includes('666')) {
//     N++;
//   }

//   if (N === inputN) {
//     console.log(num)
//     break;
//   }
// }

const input = require('fs').readFileSync('input.txt').toString().trim().split();

const N = Number(input[0]);

let count = 1;

let test = 666;

while (true) {
  if (N === 1) {
    console.log(666)
    break;
  }
  test++

  if (test.toString().includes('666')) {
    count ++
  }

  if (count === N) {
    console.log(test);
    break;
  }
}