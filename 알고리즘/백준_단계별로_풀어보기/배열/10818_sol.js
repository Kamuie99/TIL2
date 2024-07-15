const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');
const N = Number(input[0])
const array = input[1].split(' ').map(Number)
// let min = array[0]
// let max = array[0]

// for (arr of array) {
//   if (arr < min) {
//     min = arr
//   } 
//   if (arr > max) {
//     max = arr
//   }
// }
array.sort((a, b) => a - b)
console.log(array[0], array[N-1])