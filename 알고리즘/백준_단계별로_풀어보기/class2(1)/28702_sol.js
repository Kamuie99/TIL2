const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

let count;
let number;

for (let i=0; i<3; i++) {
  if (Number(input[i])) {
    count = i;
    number = Number(input[i])
  }
}


const final = number + (3 - count)

if (final % 3 === 0 && final % 5 === 0) {
  console.log('FizzBuzz')
} else if (final % 3 === 0 && final % 5 !== 0) {
  console.log('Fizz')
} else if (final % 3 !== 0 && final % 5 === 0) {
  console.log('Buzz')
} else {
  console.log(final)
}