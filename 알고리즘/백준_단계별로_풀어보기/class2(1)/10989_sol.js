const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const resultArr = input.map(Number).sort(function (a, b) { return a - b });

for (r of resultArr) {
  console.log(r)
}