'use strict';

const solution = (numbers) => {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // return [...new Set(answer)];
  // return Array.from(new Set(answer));

  return answer.filter((v, i) => (
    answer.indexOf(v) === i
  )).sort((a, b) => a - b);
};

console.log(solution([5, 0, 2, 7]));

// 3 5 6 3, 4 5 2, 7 4, 5
// 중복 제거, 오름차순
// 2 3 4 5 6 7 

