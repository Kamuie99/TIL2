const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const N = Number(input[0]);

const field = [];

for (let i=1; i<=N; i++) {
  if (!field.includes(input[i])) {
    field.push(input[i]);
  }
};

field.sort((prev, cur) => {
  if (prev.length > cur.length) return 1;
  if (prev.length < cur.length) return -1;
  if (prev > cur) return 1;
  if (prev < cur) return -1; 
});

console.log(field.join('\n'));