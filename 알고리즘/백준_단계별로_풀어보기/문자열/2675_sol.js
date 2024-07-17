const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n')

const T = Number(input[0])

for (let i=1; i<=T; i++) {
  const [R, S] = input[i].split(' ')
  const result = []
  for (let j=0; j<S.length; j++) {
    result.push(S[j].repeat(Number(R)))
  }
  console.log(result.join(''))
}