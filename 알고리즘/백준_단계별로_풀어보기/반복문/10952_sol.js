const myFunc = () => {
  const inputArr = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n')
  length = inputArr.length
  for (let i=0; i<length; i++) {
    const A = Number(inputArr[i].split(' ')[0]);
    const B = Number(inputArr[i].split(' ')[1]);
    const result = A + B
    if (result === 0) {
      break
    } else {
      console.log(result)
    }
  }
}

myFunc()