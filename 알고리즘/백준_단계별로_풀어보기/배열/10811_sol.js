const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');
const [N, M] = input[0].split(' ').map(Number);

/* Array에 1부터 N까지 숫자를 자기 자리에 넣는다. */
const Array = [0]
for (let i=1; i<=N; i++) {
  Array.push(i)
}

/* input 값들을 돌면서 순서를 바꿔준다. */
for (let i=1; i<=M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  /* 배열의 바꿀 부분을 뽑아서 거꾸로 뒤집은 다음*/
  const subArray = Array.slice(a, b+1);
  subArray.reverse();
  /* 원래 있던 인덱스에 다시 넣어준다. */
  for (let j=0; j<subArray.length; j++) {
    Array[j+a] = subArray[j]
  }
}

/* 인덱싱을 위해 0번째 자리는 0이 있으므로 1번째 자리부터 출력 */
console.log(...Array.slice(1))