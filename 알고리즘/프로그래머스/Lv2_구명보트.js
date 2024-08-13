function solution(people, limit) {
  people.sort((a, b) => b - a);  // 숫자 내림차순으로 정렬
  let result = 0;
  let left = 0;
  let right = people.length -1;
  
  while (left <= right) {
      if (people[left] + people[right] <= limit) {
          // 가장 무거운 사람과 가장 가벼운 사람을 함께 태울 수 있는 경우
          right--;
      }
      // 가장 무거운 사람은 반드시 태운다
      left++;
      result++;
  }
  
  return result;
}