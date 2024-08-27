const input = require('fs').readFileSync('input.txt').toString().split('\r\n');
// const N = Number(input[0]);
// const M = Number(input[2]);

const find = input[1].split(' ').map(Number);
const check = input[3].split(' ').map(Number);

const find_set = new Set(find); //집합으로 전환

const result = [];

check.forEach(c => { //m 배열 순회
    if(find_set.has(c)){
        result.push(1);
    }
    else result.push(0);
});

console.log(result.join('\n'));