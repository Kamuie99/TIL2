let [N, K] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(Number);

const field = [];
for (let i = 1; i <= N; i++) {
    field.push(i);
}

const result = [];
let index = 0;

while (field.length > 0) {
    index = (index + K - 1) % field.length; // K번째 인덱스를 찾고, 길이로 나눈 나머지를 인덱스로 사용
    result.push(field.splice(index, 1)); // 인덱스에 해당하는 사람을 제거하고 결과에 추가
}

console.log(`<${result.join(', ')}>`);