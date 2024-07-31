const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0])

const Numbers = input[1].split(' ').map(Number);

let count = 0;

for (num of Numbers) {
  if (num > 1) {
    let isPrime = true;
    for (let i=2; i<num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break
      }
    } if (isPrime) {
      count ++
    }
  }
}

console.log(count)