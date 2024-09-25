const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const players = [];

for (let i=0; i<8; i++) {
  const [time, team] = input[i].split(' ');

  // const temp = time.split(':');

  // let result = ''
  // for (t of temp){
  //   result += t;
  // }

  // result = Number(result);

  const result = Number(time.replace(':', ''));  // ':' 제거하고 숫자로 변환

  players.push([result, team]);
}

players.sort((a, b) => {
  return a[0] - b[0]
})

const scores = [10, 8, 6, 5, 4, 3, 2, 1];
let R = 0;
let B = 0;
for (let j=0; j<8; j++) {
  if (players[j][1] === 'R') {
    R += scores[j]
  } else {
    B += scores[j]
  }
}

if (R > B) {
  console.log('Red')
} else {
  console.log('Blue')
}