const exc = () => {
  const input = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n')
  const T = Number(input[0])
  for (let i=1; i<=T; i++) {
    const AB = input[i].split(' ')
    const A = Number(AB[0])
    const B = Number(AB[1])
    console.log(`Case #${i}: ${A} + ${B} = ${A+B}`)
  }
}

exc()