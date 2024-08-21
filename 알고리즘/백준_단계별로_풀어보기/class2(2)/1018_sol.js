const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const [N ,M] = input[0].split(' ').map(Number);

// 체스판으로 자르기 전의 보드
const field = [];
for (let i=1; i<=N; i++) {
  field.push(input[i]);
}

// 출발점들을 다 저장한 배열
const startPonints = [];
for (let i=0; i<N-7; i++) {
  for (let j=0; j<M-7; j++) {
    startPonints.push([i, j]);      // 출발점
  }
}

const type = 'BW';

let minCount = 9999999;

for (start of startPonints) {
  let typeCount = 0;
  let type2Count = 0;
  const [x, y] = start;

  for (let i=0; i<=7; i++) {
    for (let j=0; j<=7; j++) {
      if (type[(i+j)%2] !== field[x+i][y+j]) {
        typeCount++;
      } else {
        type2Count++;
      }
    }
  }

  minCount = Math.min(minCount, typeCount, type2Count)
}


console.log(minCount)