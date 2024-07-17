const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0]);

const scores = input[1].split(' ').map(Number);

/* 최대값 구하기 */
let max = scores[0]
for (let i=1; i<N; i++) {
  if(max < scores[i]) {
    max = scores[i]
  }
}

/* 평균 조작하기 */
let gara = 0;
for (let i=0; i<N; i++) {
  gara += scores[i] / max * 100
}

/* 결과 출력하기 */
console.log(gara / N)