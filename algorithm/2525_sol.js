const input = require('fs').readFileSync('input.txt', 'utf-8').trim().split('\r\n');

const HourMinute = input[0].split(' ');
let Hour = parseInt(HourMinute[0]);
let Minute = parseInt(HourMinute[1]);

const plusMinute = parseInt(input[1]);

Minute += plusMinute

let resultH
let resultM

if (Minute >= 60) {
  resultM = Minute % 60;
  Hour += parseInt(Minute / 60);
} else {
  resultM = Minute
}

if (Hour >= 24) {
  resultH = parseInt(Hour % 24)
} else {
  resultH = Hour
}

console.log(resultH, resultM);