function solution(s){
  const input = s.split(' ')
  const inputLength = input.length
  const result = []
  for (let i=0; i<inputLength; i++) {
    const temp = input[i];
    // 첫글자 먼저 처리
    if (temp[0] === ' ') { // 빈칸인 경우
      result.push(' ');
    } else if (temp[0] >= 'a' && temp[0] <= 'z') {
      result.push(temp[0].toUpperCase())  // 소문자일 경우
    } else {
      result.push(temp[0]) // 그 외의 경우 (대문자, 숫자)
    }

    for (let j=1; j<temp.length; j++) {
      if (temp[j] >= 'A' && temp[j] <= 'Z') {
        result.push(temp[j].toLowerCase()) // 대문자인 경우
      } else {
        result.push(temp[j])
      }
    }
    result.push(' ')
  }
  return result.join('');
}

console.log(solution("3people unFollowed me "))