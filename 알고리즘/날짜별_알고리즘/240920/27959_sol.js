const input = require('fs').readFileSync('input.txt').toString();
const [N, M] = input.split(' ').map(Number);

if (N * 100 >= M) {
  console.log('Yes')
} else {
  console.log('No')
}