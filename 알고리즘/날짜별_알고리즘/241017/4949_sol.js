const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const open = ['(', '['];
const close = [')', ']'];

for (let text of input) {
  console.log(text);
  for(t of text) {
    if (open.includes(t)) {
      console.log('여는거')
    }
  }
}