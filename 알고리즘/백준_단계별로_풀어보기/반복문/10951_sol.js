const myFunc = () => {
  const inputArr = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n')
  const length = inputArr.length
  for (let i=0; i<length; i++) {
    const A = Number(inputArr[i].split(' ')[0])
    const B = Number(inputArr[i].split(' ')[1])
    console.log(A+B)
  }
}

myFunc()