const input = require('fs').readFileSync('input.txt').toString();
const alphabet = [];

const [N, S] = input.split(' ')

let count = 0;

for (let i of S){
  if (! alphabet.includes(i)) {
    alphabet.push(i)
  } else {
    count ++;
  }
}

const step2 = alphabet.join('') + (count + 4);

const step3 = (Number(N) + 1906) + step2;

const step3_5 = [];

for (let s of step3) {
  step3_5.push(s)
}

const step4 = step3_5.reverse().join('');

const step5 = 'smupc_' + step4;

console.log(step5);