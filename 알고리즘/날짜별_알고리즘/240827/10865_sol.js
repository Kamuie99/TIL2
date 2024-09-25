const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const [N, M] = input[0].split(' ').map(Number);

const friendCount = Array(N + 1).fill(0); // 각 학생의 친구 수를 저장하는 배열 초기화

console.log()

for (let j = 1; j <= M; j++) {
  const [A, B] = input[j].split(' ').map(Number);
  friendCount[A]++; // A 학생의 친구 수 증가
  friendCount[B]++; // B 학생의 친구 수 증가
}

for (let i = 1; i <= N; i++) {
  console.log(friendCount[i]); // 각 학생의 친구 수 출력
}