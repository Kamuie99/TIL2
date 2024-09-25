const input = require('fs').readFileSync('input.txt').toString();

const [K, N, M] = input.split(' ').map(Number);

if (K*N-M >= 0) {
  console.log(K*N-M)
} else {
  console.log(0)
}