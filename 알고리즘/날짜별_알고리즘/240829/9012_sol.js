const input =require('fs').readFileSync('input.txt').toString().split('\r\n');

const T = Number(input[0]);

for (let i=1; i<=T; i++) {
  const tmp = input[i];
  const field = [];
  for (tm of tmp) {
    if (tm === '(') {
      field.push(tm)
    } else if (tm === ')' && field.length === 0) {
      field.push('breaked')
      break;
    } else if (tm === ')' && field.length !== 0) {
      field.pop();
    }
  }
  if (field.length === 0) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}
