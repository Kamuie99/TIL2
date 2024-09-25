const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const field = [];

for (let i=1; i<=N; i++) {
  const tmp = Number(input[i])
  if (tmp === 0) {
    field.pop();
  } else {
    field.push(tmp)
  }
}

let sum = 0;
for (f of field) {
  sum += f
}
console.log(sum)