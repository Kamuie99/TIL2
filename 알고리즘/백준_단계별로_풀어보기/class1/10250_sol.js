const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const T = Number(input[0])

for (let i=1; i<=T; i++) {
  const [H, W, N] = input[i].split(' ').map(Number)
  let front = 1;
  if (N % H === 0) {
    front = H
  } else {
    front = N % H
  }
  const back = parseInt(N / H) + 1;

  if (back < 10) {
    console.log(front.toString() + '0' + back.toString())
  } else {
    console.log(front.toString() + bakc.toString())
  }
}