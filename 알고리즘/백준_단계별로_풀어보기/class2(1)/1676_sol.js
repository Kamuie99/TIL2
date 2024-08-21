const input = require('fs').readFileSync('input.txt').toString().trim().split();
const N = Number(input[0]);

let result = 1;

// 펙토리얼 계산 후 result에 저장
function factorial(n) {
  return n ? BigInt(BigInt(n) * BigInt(factorial(n - 1))) : 1;
}

// 0을 셀 변수 count 선언
let count = 0;

// 지금 현재 N 값에 0의 개수를 count에 더해준다.
const arr = [...String(factorial(N))];
for (a of arr) {
  if (a === '0') {
    count ++;
  }
}

// 1씩 감소해가면서 0의 개수를 세고 감소한 수가 0이 아닌 경우 종료
for (let i=result-1; i>0; i--) {
  if (i !== 0) {
    const temp = [...String(i)]
    for (t of temp) {
      if (t === '0') {
        count ++;
      }
    }
    break;
  }
}

console.log(count);