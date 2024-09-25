const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const field = input[1].split(' ').map(Number);

let total = field.length;
let yes = 0 
let no = 0
let gg = 0

for (let f of field) {
  if (f === 1) {
    yes++
  } else if (f === -1) {
    no++
  }else {
    gg++
  }
}

if (gg >= total/2) {
  console.log('INVALID');
}else if (yes > no) {
  console.log('APPROVED');
}else {
  console.log('REJECTED');
}