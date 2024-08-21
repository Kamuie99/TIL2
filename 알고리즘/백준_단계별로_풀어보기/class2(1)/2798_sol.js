const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const [N, M] = input[0].split(' ');

const numbers = input[1].split(' ').map(Number);

let sum = 0;
let maxSum = 0;

for (let i=0; i<N-2; i++) {
  for (let j=i+1; j<N-1; j++) {
    for (let k=j+1; k<N; k++) {
      sum = numbers[i] + numbers[j] + numbers[k];
      if (sum > maxSum && sum <= M) {
        maxSum = sum;
      }
    }
  }
}

console.log(maxSum);