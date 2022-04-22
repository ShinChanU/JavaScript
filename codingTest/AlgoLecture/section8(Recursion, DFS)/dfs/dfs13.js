// 수들의 조합
const solution = (n, k, arr, m) => {
  let answer = 0;
  let tmp = Array.from({ length: k }, () => 0);

  const DFS = (L, s) => {
    if (L === k) {
      let sum = tmp.reduce((a, b) => a + b); // reduce 사용 필요 X
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution(5, 3, [2, 4, 5, 8, 12], 6)); // output: 2
// arr에서 nCk 해서 나온 수의 합이 m의 배수인지
// 0422 study.

const solution2 = (n, k, arr, m) => {
  let answer = 0;

  const DFS = (L, s, sum) => {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0, 0);

  return answer;
};

console.log(solution2(5, 3, [2, 4, 5, 8, 12], 6)); // output: 2
// 0422 lecture
