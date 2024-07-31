/* 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라고 한다 */

const input =require('fs').readFileSync('input.txt').toString().trim().split();
const N = Number(input)
let result = false;

for (let i=1; i<N; i++) {
  let strI = String(i)
  let sum = 0;
  for (s of strI) {
    /* i의 각자리 수를 더한 값을 저장 */
    sum += Number(s)
  }
  /* 만약 i의 각자리수 + i 값이 N과 같다면 끝내고 출력 */
  if ((sum+i) === N) {
    console.log(i)
    result = true;
    break;
  }
}

if (result === false) {
  console.log(0)
}
