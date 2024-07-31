const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

for (let i=0; i<input.length-1; i++) {
  const [A, B, C] = input[i].split(' ').map(Number);
  const maxNumber = Math.max(A, B, C);
  if (A**2 + B**2 + C**2 === maxNumber**2*2) {
    console.log('right')
  } else {
    console.log('wrong')
  }
}