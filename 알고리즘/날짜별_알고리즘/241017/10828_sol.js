const input = require('fs').readFileSync('input.txt').toString().split('\r\n');
const N = Number(input[0]);
const stack = [];
const result = [];

for (let i=1; i<=N; i++) {
  const [what, number] = input[i].split(' ');
  if (what === 'push') {
    stack.push(Number(number));
  } else if (what === 'pop') {
    if (stack.length) {
      const pop = stack.pop();
      result.push(pop);
    } else {
      result.push(-1);
    }
  } else if (what === 'size') {
    result.push(stack.length);
  } else if (what === 'empty') {
    if (stack.length) {
      result.push(0)
    } else {
      result.push(1)
    }
  } else if (what === 'top') {
    if (stack.length) {
      result.push(stack[stack.length-1])
    } else {
      result.push(-1)
    }
  }
}

console.log(result.join('\n'))