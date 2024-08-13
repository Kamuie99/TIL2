function solution(brown, yellow) {
  let tmp = brown + yellow;
  for (let i=tmp-1; i>=1; i--) {
      if (tmp % i === 0) {
          let a = i;
          let b = tmp / i;
          a -= 2;
          b -= 2;
          if (a * b === yellow) {
              let result = [];
              result.push(a+2);
              result.push(b+2);
              return (result)
          }
      }
  }
}