const input = require('fs').readFileSync('input.txt').toString();

const convert = {
  'B' : 'v',
  'E' : 'ye',
  'H' : 'n',
  'P' : 'r',
  'C' : 's',
  'Y' : 'u',
  'X' : 'h'
}

const result = []

for (i of input) {
  if (i in convert) {
    result.push(convert[i])
  } else {
    result.push(i.toLowerCase())
  }
}

console.log(result.join(''))