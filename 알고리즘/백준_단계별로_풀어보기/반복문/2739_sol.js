const input = require('fs').readFileSync('input.txt', 'utf-8').trim().split();

for (let i=1; i<=9; i++){
  console.log(`${input} * ${i} = ${input * i}`)
}