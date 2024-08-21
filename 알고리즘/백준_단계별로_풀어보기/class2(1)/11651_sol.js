const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n')

const N = Number(input[0])  // input의 첫번째 줄은 N

const field = [];           // 빈 배열 생성 

for (let i=1; i<=N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  field.push([x,y])         // 배열에 [x, y]와 같이 좌표 추가
}

field.sort((a, b) => {      // 정렬을 
  if (a[1] === b[1]) {      // 1번째 인덱스 즉, y 좌표가 같다면
    return a[0] - b[0];     // 0번째 인덱스 즉, x 좌표로 정렬
  } else {
    return a[1] - b[1];     // 그렇지 않을 경우 y 좌표로 정렬
  }
});

field.forEach(point => {    // 배열 안의 각각의 point 요소를
  console.log(point.join(' '));   // 빈칸으로 구분해서 출력
})
