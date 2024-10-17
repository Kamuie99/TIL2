const input = require('fs').readFileSync('input.txt').toString();

const N = Number(input);

const Str = 'SciComLove';

const tmp = N % 10;

console.log(Str.substring(tmp) + Str.substring(0, tmp))