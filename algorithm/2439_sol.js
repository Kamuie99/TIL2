const myFunction = () => {
  const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
  for (let i=1; i<=N; i++) {
    console.log(' '.repeat(N-i) + '*'.repeat(i));
  }
}

myFunction()