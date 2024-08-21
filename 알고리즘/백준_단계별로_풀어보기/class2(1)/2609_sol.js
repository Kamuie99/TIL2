const input = require('fs').readFileSync('input.txt').toString().split(' ');
const [A, B] = input.map(Number);
let maxN = Math.max(A, B); let minN = Math.min(A, B);

if (A === B) {
  console.log(A);
  console.log(A);
} else {
  for (let i=minN; i>0; i--) {
    if (maxN % i === 0 && minN % i === 0 ) {
      console.log(i)
      break;
    }
  }
  
  let a = 1;
  while (true) {
    if ((maxN * a) % minN === 0) {
      console.log(maxN*a);
      break;
    } else {
      a++
    }
  }
}


