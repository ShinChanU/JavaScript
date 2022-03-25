// sliding Window
const solution = (m, arr) => {
  // m일 연속 매출총액 중 최대값 출력
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    if (rt < m) {
      sum += arr[rt];
      answer = sum;
    } else {
      sum = sum - arr[lt++] + arr[rt];
      if (answer < sum) answer = sum;
    }
  }

  return answer;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
// 220325

const solution2 = (m, arr) => {
  // m일 연속 매출총액 중 최대값 출력
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let i = 0; i < m; i++) sum += arr[i];
  answer = sum;
  for (let i = m; i < arr.length; i++) {
    sum += arr[i] - arr[i - m];
    answer = Math.max(answer, sum);
  }

  return answer;
};

console.log(solution2(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
// 220325 done.
