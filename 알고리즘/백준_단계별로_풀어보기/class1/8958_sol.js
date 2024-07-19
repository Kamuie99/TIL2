const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const T = Number(input[0])

for (let i=1; i<=T; i++) {
  const str = input[i]
  let result = 0;
  let count = 1;
  for (let j=0; j<str.length; j++) {
    if (str[j] === 'O') {
      result += count;
      count ++
    } else if (str[j] === 'X') {
      count = 1
    }
  }
  console.log(result)
}
