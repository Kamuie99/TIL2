const input = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n');
const [N, S, V] = input

const cnt = S.split(' ').filter((ele) => ele === V).length;

console.log(cnt)