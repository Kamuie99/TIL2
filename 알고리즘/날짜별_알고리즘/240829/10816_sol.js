const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const field = {};

const sangeunCards = input[1].split(' ').map(Number);

for (sang of sangeunCards) {
  if (sang in field) {
    field[sang] = field[sang] + 1;
  } else {
    field[sang] = 1;
  }
}

const findCards = input[3].split(' ').map(Number);

const result = [];

for (find of findCards) {
  if (find in field) {
    result.push(field[find])
  } else {
    result.push(0)
  }
}

console.log(result.join(' '))