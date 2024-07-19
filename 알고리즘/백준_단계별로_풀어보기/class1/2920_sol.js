const input = require('fs').readFileSync('input.txt').toString().trim().split(' ')

const array = input.join('')

if (array === '12345678') {
  console.log('ascending')
} else if (array === '87654321') {
  console.log('descending')
} else {
  console.log('mixed')
}