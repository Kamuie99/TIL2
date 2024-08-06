function solution(n) {
  let nextN = n+1;
  while(true) {
    nto2 = n.toString(2);
    nextNto2 = nextN.toString(2);
    let nto2count = 0;
    let nextNto2count = 0;
    for (i of nto2) {
      if (i === '1') {
        nto2count ++;
      }
    }

    for (j of nextNto2) {
      if (j === '1') {
        nextNto2count ++;
      }
    }

    if (nto2count === nextNto2count) {
      return nextN;
    } else {
      nextN ++;
    }

  }
}

console.log(solution(78));