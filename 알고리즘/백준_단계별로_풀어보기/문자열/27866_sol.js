const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const String = input[0]
const i = Number(input[1])

console.log(String[i-1])