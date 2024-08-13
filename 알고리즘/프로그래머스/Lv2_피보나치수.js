function solution(n) {
  return (f(n) % 1234567)
}

function f(n) {
  const results = {
      0: 0,
      1: 1,
  }
  for (let i=2; i<=n; i++) {
      results[i] = results[i-1] % 1234567 + results[i-2] % 1234567
  }
  return results[n]
}