function solution(arr) {
  const max = Math.max(...arr)
  let i = max;
  while (true) {
    let check = true;
    for (a of arr) {
      if (i % a !== 0) {
        check = false;
      }
    }

    if (check) {
      return i;
    }else {
      i++;
    }
  }
}

const result = solution([2,6,8,14])
console.log(result)