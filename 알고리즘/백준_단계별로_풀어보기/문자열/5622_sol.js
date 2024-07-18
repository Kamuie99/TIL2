const input = require('fs').readFileSync('input.txt').toString().trim().split('');

const phoneNumbers = {
  'ABC' : 2,
  'DEF' : 3,
  'GHI' : 4,
  'JKL' : 5,
  'MNO' : 6,
  'PQRS' : 7,
  'TUV' : 8,
  'WXYZ' : 9
  }


let result = 0;

for (let i=0; i<input.length; i++){
  const char = input[i]
  for (phone in phoneNumbers) {
    if (phone.includes(char)) {
      result += phoneNumbers[phone] + 1
    }
  }
}

console.log(result)
