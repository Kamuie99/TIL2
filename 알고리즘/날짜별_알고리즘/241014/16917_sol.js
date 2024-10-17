const input = require('fs').readFileSync('input.txt').toString();

// 양념 A, 후라이드 B, 반반 C, 구입양념 X, 구입 후라이드 Y
const [A, B, C, X, Y] = input.split(' ').map(Number);

// 후라이드 양념을 반반으로 구매할 때 몇마리 구매해야 되는지
const min = Math.min(X, Y);

const max = Math.max(X, Y);

// 합계 결제 최소 금액
let result = 0;

if (C * min * 2 < A * min + B * min ) {
  if (C * max * 2 < (C * min * 2 + A * (X-min) + B * (Y-min))) {
    result += C * max * 2
  } else {
    result += (C * min * 2 + A * (X-min) + B * (Y-min))
  }
} else {
  result += (A * X + B * Y)
}

console.log(result);

