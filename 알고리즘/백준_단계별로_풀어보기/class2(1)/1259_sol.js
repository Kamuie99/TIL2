const input = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const reverseString = (str) => {
  const splitString = str.split('');
  const reverseArray = splitString.reverse();
  return reverseArray.join('');
}


for (let i=0; i<input.length-1; i++) {
  let test = input[i];
  if (test === reverseString(test)) {
    console.log('yes')
  }else {
    console.log('no')
  }
}