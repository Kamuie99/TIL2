const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const result = Number(input[0]) * Number(input[1]) * Number(input[2])

const count = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}

const str = result.toString()

for (s of str) {
  count[s] ++
}

for (let key in count) {
  console.log(count[key])
}