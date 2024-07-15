const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n').map(Number);

const students = [];
for (let i=1; i<=30; i++) {
  students.push(i)
}

const findDifference = (arr1, arr2) => {
  const difference = [];
  arr1.forEach(item => {
    if (!arr2.includes(item)) {
      difference.push(item)
    }
  });

  return difference
}

const resultArray = findDifference(students, input)

for (result of resultArray) {
  console.log(result)
}
