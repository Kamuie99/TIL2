const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0]);

const field = [];

for (let i=1; i<=N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  field.push([x, y])
}

field.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
})

field.forEach(point => {
  console.log(point.join(' '))
})