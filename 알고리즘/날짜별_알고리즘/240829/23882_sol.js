const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const [N, K] = input[0].split(' ').map(Number);

const A = input[1].split(' ').map(Number);

let count = 0;
for (let i=N-1; i>=1; i--) {
  let maxNum = [0, 0];
  let lastNum = [0, 0];
  for (let j=0; j<=i; j++) {
    if (A[j] > maxNum[0]) {
      maxNum[0] = A[j]
      maxNum[1] = j
    }
    if (j === i) {
      lastNum[0] = A[j]
      lastNum[1] = j
    }
  }

  if (maxNum[0] !== lastNum[0]) {
    let temp = A[maxNum[1]]
    A[maxNum[1]] = A[lastNum[1]]
    A[lastNum[1]] = temp;
    count ++
  }

  if (count === K) {
    console.log(A.join(' '))
    break;
  }
}

if (count < K) {
  console.log(-1)
}