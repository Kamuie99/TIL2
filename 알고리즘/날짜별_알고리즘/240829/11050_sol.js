function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

function binomialCoefficient(N, K) {
  return factorial(N) / (factorial(K) * factorial(N - K));
}

// 입력 받기
const input = require('fs').readFileSync('/dev/stdin').toString();
const [N, K] = input.split(' ').map(Number);

// 이항 계수 계산 및 출력
console.log(binomialCoefficient(N, K));
