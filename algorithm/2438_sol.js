const exc = () => {
  const N = Number(require('fs').readFileSync('./input.txt').toString().trim())
  for(let i=1; i<=N; i++) {
    console.log('*'.repeat(i));
  }
}

exc()