const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const [N, M] = input[0].split(' ').map(Number)

const people = [];

for (let i=0; i<N+M; i++) {
  people.push(0)
}

const numbers = input[1].split(' ').map(Number);

for (let i=0; i<numbers.length; i++) {
  people[i] += numbers[i]
}

for (let i=2; i<2+N; i++) {
  const plusminus = input[i].split(' ').map(Number);
  let total = 0;
  for (let j=0; j<plusminus.length; j++) {
    people[j] += plusminus[j]
    total += plusminus[j]
  }
  people[i-2] -= total
} 

console.log(people.join(' '));