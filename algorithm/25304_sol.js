const input = require('fs').readFileSync('input.txt', 'utf-8').trim().split('\r\n');

const totalPrice = parseInt(input[0]);
const count = parseInt(input[1]);

let calculate = 0;
for (let i=2; i<=count+1; i++) {
  const priceNumber = input[i].split(' ');
  const price = parseInt(priceNumber[0]);
  const number = parseInt(priceNumber[1]);
  calculate += price * number;
}

if (calculate === totalPrice) {
  console.log('Yes')
} else {
  console.log('No')
}