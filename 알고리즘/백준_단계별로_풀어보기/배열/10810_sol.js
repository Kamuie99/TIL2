const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const [N, M] = input[0].split(' ').map(Number);

/* 0이 들어있는 N 길이 만큼의 바구니 배열 만들기 */
/* N이 5일때는 [0, 0, 0, 0, 0, 0] */
const Array = [];
for (let i=0; i<=N; i++) {
  Array.push(0)
}

/* input 값을 Start, End, Ball로 구조분해할당 후 */
/* 해당 바구니에 공들을 집어 넣는다. */
for (let i=1; i<=M; i++) {
  const [S, E, B] = input[i].split(' ').map(Number);
  for (let j=S; j<=E; j++) {
    Array[j] = B;
  }
}

/* 인덱싱을 위해 0번째 값은 비어있으므로 1번째 값부터 출력 */
console.log(...Array.slice(1))