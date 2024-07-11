const exc = () => {
  /*                                        "/dev/stdin"        */
  const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
  
  const T = parseInt(input[0]);
  for (let i=1; i<=T; i++) {
    const AB = input[i].split(' ');
    const A = parseInt(AB[0])
    const B = parseInt(AB[1])
    console.log(`Case #${i}: ${A + B}`)
  }
}

exc()