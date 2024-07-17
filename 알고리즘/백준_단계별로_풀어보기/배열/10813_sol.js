const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const [N, M] = input[0].split(' ').map(Number);

/* 배열 만들기 */
const Array = []
for (let i=0; i<=N; i++) {
  Array.push(i)
}

/* 공 바꾸기 */
for (let i=1; i<=M; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  const box = Array[A];
  Array[A] = Array[B]
  Array[B] = box
}

console.log(...Array.splice(1))