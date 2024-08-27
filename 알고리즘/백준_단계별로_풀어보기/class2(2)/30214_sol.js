const input = require('fs').readFileSync('input.txt').toString().split(' ');
const [s1, s2] = input.map(Number);

function isEasyProblem(s1, s2) {
  // s1은 첫 번째 절반 동안의 해결 수, s2는 전체 대회 동안의 총 해결 수
  if (s1 >= s2 / 2) {
      return "E";  // 문제는 쉬움으로 간주됩니다.
  } else {
      return "H";  // 문제는 어렵게 간주됩니다.
  }
}

// 예제 입력 테스트
console.log(isEasyProblem(s1, s2))
