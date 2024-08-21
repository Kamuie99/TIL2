const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0]);

const people = [];

for (let i=1; i<=N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  let z = 1;                      // z는 덩치 등수
  people.push([x, y, z])          // [x(몸무게), y(키), z(덩치등수)] 형태로 저장
}

for (person of people) {          // 사람들을 순회하면서
  for (let i=0; i<N; i++) {       // 각각의 사람들에 대해서
    if (person === people[i]) {   // 본인을 제외하고
      continue;
    } else {                      // 다른사람들과 비교해 봤을때
      // 다른사람이 키와 몸무게가 모두 크다면
      if (person[0] < people[i][0] && person[1] < people[i][1]) {
        person[2]++;              // 자신의 덩치 등수값 1 증가
      }
    }
  }
}

const result = [];                // 결과값을 저장할 배열 생성

for (p of people) {
  result.push(p[2]);              // 각자의 덩치 등수 저장
}

console.log(result.join(' '));    // 공백으로 구분하여 출력