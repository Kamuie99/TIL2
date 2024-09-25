const input = require('fs').readFileSync('input.txt').toString().trim();
const [N, P] = input.split(' ').map(Number);

function factorialModP(N, P) {
  let result = 1n;
  for (let i = 1n; i <= BigInt(N); i++) {
      result = (result * i) % BigInt(P);
  }
  return Number(result);
}

console.log(factorialModP(N, P));
