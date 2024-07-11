const myFunc = () => {
  const input = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n');

  const count = Number(input[0])
  let answer = ''

  for (let i=1; i<=count; i++) {
    answer += Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]) + '\n'
  }

  console.log(answer)
}
myFunc()