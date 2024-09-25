const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const field = {}

for (let i=1; i<=10; i++) {
  field[i] = -1;
}

let count = 0;
for (let i=1; i<=N; i++) {
  const [cow, locate] = input[i].split(' ').map(Number);
  if (field[cow] !== -1 && field[cow] !== locate) {
    field[cow] = locate;
    count ++;
  } else if (field[cow] === -1) {
    field[cow] = locate;
  }
}

console.log(count);
