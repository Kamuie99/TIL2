function solution(n, words) {
  const said = new Set(); // 이미 말한 단어를 저장하는 집합
  const peoples = new Array(n).fill(0); // 각 사람이 몇 번 말했는지 기록하는 배열

  let j = 0; // 현재 사람의 인덱스
  let lastChar = words[0][0]; // 첫 단어의 첫 글자로 초기화
  const result = [0, 0]; // 결과를 저장할 배열

  for (let word of words) {
    // 이미 말한 단어인지 체크
    if (said.has(word)) {
      result[0] = j + 1;            // 사람 번호 (1부터 시작)
      result[1] = peoples[j] + 1;   // 턴 수 (1부터 시작)
      break;
    }

    // 현재 단어가 이전 단어의 마지막 글자로 시작하는지 확인
    if (word[0] !== lastChar) {
      result[0] = j + 1;
      result[1] = peoples[j] + 1;
      break;
    }

    // 현재 단어를 말한 목록에 추가
    said.add(word);

    // 다음 턴을 위해 마지막 글자 업데이트
    lastChar = word[word.length - 1]

    // 현재 사람이 몇 번 말했는지 카운트
    peoples[j] += 1;

    // 다음 사람으로 이동
    j = (j+1) % n;
  }

  return result;
}