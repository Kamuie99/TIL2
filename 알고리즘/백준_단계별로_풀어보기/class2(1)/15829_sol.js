const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const numbers = {}

let startCharCode = 97; // a의 유니코드 값은 97

for (let i=0; i<26; i++) {
  let char = String.fromCharCode(startCharCode+i);
  numbers[char] = i+1;
}

const L = Number(input[0]);
const string = input[1];

let result = 0;
for (let j=0; j<L; j++) {
  result += numbers[string[j]] * (31**j)
}

console.log(result);