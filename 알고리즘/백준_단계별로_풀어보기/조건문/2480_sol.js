const input = require('fs').readFileSync('input.txt', 'utf-8').trim().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

if (A === B && B === C) {
  console.log(10000 + A * 1000)
} else if (A === B | B === C) {
  console.log(1000 + B * 100) 
} else if (A === C) {
  console.log(1000 + C * 100)
} else {
  if (A >= B && A >= C) {
    console.log(A * 100)
  } else if (B >= A && B >= C) {
    console.log(B * 100)
  } else {
    console.log(C * 100)
  }
}
