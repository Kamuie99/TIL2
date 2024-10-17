const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);
const queue = [];
const result = [];


for (let i=1; i<=N; i++) {
  const [what, number] = input[i].split(' ');
  switch (what) {
    case 'push':
      queue.push(Number(number));
      break
    case 'pop':
      if (queue.length) {
        const front = queue.shift();
        result.push(front)
      } else {
        result.push(-1)
      }
      break
    case 'size':
      result.push(queue.length);
      break
    case 'empty':
      if (queue.length) {
        result.push(0)
      } else {
        result.push(1)
      }
      break
    case 'front':
      if (queue.length) {
        result.push(queue[0])
      } else {
        result.push(-1)
      }
      break
    case 'back':
      if (queue.length) {
        result.push(queue[queue.length-1])
      } else {
        result.push(-1)
      }
      break
  }
}

console.log(result.join('\n'))