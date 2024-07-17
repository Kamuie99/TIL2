const input = require('fs').readFileSync('input.txt').toString().trim();

const alphabetDict = {};

for (let i=97; i<=122; i++) {
  alphabetDict[String.fromCharCode(i)] = -1;
}


for (let i=0; i<input.length; i++) {
  if (alphabetDict.hasOwnProperty(input[i]) && alphabetDict[input[i]] === -1) {
    alphabetDict[input[i]] = i
  }
}

console.log(...Object.values(alphabetDict))