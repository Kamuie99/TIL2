function solution(s) {
  let deletecount = 0;
  let count = 0;
  while (s !== '1') {
    count += 1
    let sSplit = s.split('0')        // 0을 제외하고 남은 문자열
    let count0 = sSplit.length - 1   // 0을 몇개 지웠는지
    deletecount += count0   // 0 총 몇 번 지웠는지 합치기
    let swithout0 = sSplit.join('') // 0을 지우고 난 s 값
    let c = swithout0.length // 0을 지우고 난 s의 길이 c
    s = c.toString(2)  // s에 c를 2진수로 바꾼 값 넣기
  }

  const result = [count, deletecount]
  return result;
}

console.log(solution('1111111'))