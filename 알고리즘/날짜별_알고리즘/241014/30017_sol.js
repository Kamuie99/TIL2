const input = require('fs').readFileSync('input.txt').toString();
const [A, B] = input.split(' ').map(Number);

if (B >= A) {
  console.log(A + (A-1))
} else {
  console.log(B+ (B+1))
}