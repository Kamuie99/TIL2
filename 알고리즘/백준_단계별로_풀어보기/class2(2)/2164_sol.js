const input = require('fs').readFileSync('input.txt').toString().trim();
const N = Number(input);

let queue = [];
let front = 0;

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.length - front > 1) {
  front++;  // 첫 번째 카드를 버린 것과 동일한 효과
  queue.push(queue[front]);  // 두 번째 카드를 맨 뒤로 보냄
  front++;  // 두 번째 카드도 큐에서 제거된 것과 동일한 효과
}

console.log(queue[front]);
