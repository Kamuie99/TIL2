const input = require('fs').readFileSync('input.txt').toString().split('\r\n');

const N = Number(input[0]);

const people = [];

for (let i=1; i<=N; i++) {
  let [age, name] = input[i].split(' ');
  age = Number(age);
  const idx = i;
  people.push([age, name, idx])
}

people.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[2] - b[2];
  }
  return a[0] - b[0]
})

for (person of people) {
  console.log(person[0], person[1])
}