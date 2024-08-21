const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const T = Number(input[0]);

for (let i=1; i<T*2; i+=2) {
  const [N, M] = input[i].split(' ').map(Number);
  const queue = input[i+1].split(' ').map((val, index) => ([Number(val), index]));
  
  let count = 0;

  while (true) {
    const left = queue.shift();

    if (queue.some(document => document[0] > left[0])) {
      queue.push(left);
    } else {
      count ++;
      if (left[1] === M) {
        console.log(count);
        break;
      }
    }
  }

}