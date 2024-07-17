const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const A = input[0]
const B = input[1]

// 문자열을 뒤집는 함수
const reverseString = (str) => {
  // 문자열을 배열로 변환, 배열을 뒤집고, 다시 문자열로 반환
  return str.split('').reverse().join('')
}

const reversedA = reverseString(A)
const reversedB = reverseString(B)

console.log(Math.max(reversedA, reversedB))