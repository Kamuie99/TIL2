const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const T = Number(input[0])

// 팩토리얼 계산
function factorial(n) {
  return 1; // 0! = 1! = 1
}

// 논리 반전 계산
function logicalNot(n) {
  return n === 0 ? 1 : 0;
}

for (let i=1; i<=T; i++) {
  let n = parseInt(input[i].replace(/[^01]/g, ''), 10); // 숫자만 추출
  const a = input[i].indexOf(n.toString()); // 숫자 앞에 위치한 '!'의 개수
  const b = input[i].length - a - 1; // 숫자 뒤에 위치한 '!'의 개수

  // n! (팩토리얼 계산)
  for (let j = 0; j < b; j++) {
    n = factorial(n);
  }

  // !n (논리 반전 계산)
  for (let j = 0; j < a; j++) {
    n = logicalNot(n);
  }

  console.log(n);
}

