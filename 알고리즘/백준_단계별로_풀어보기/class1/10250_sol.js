const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

/* T개의 테스트 케이스 */
const T = Number(input[0]);

for (let t=1; t<=T; t++) {
  /* 높이 H, 방 개수 W, N번째 도착 손님  */
  const [H, W, N] = input[t].split(' ').map(Number);

  /* 앞자리 수는 순서를 높이로 나눈 나머지, 단 0일경우 최고층 */
  let result_front = N % H;
  if (result_front === 0) {
    result_front = H;
  }

  /* 뒷자리는 순서를 높이로 나눈 정수 몫 + 1 */
  let result_back = Math.ceil(N / H);

  /* 만약 뒷자리가 한자리수 이면 0을 앞에 붙여준다. */
  if (result_back < 10) {
    result_back = '0' + result_back
  }

  console.log(Number(String(result_front) + result_back))
}