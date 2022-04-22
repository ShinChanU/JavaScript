// 조합
const solution = (n, r) => {
  let answer = [];
  let tmp = Array.from({ length: r }, () => 0);

  const DFS = (L, p) => {
    if (L === r) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (p < i) {
          // 조건문
          tmp[L] = i;
          DFS(L + 1, i);
        }
      }
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution(4, 2)); // 4C2, nCr
// 0422 study.

const solution2 = (n, r) => {
  let answer = [];
  let tmp = Array.from({ length: r }, () => 0);

  const DFS = (L, s) => {
    if (L === r) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = s; i <= n; i++) {
        // 매개변수를 for문 start 번호로 지정
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };

  DFS(0, 1); // L, startNumber(for문에서)

  return answer;
};

console.log(solution2(4, 2)); // 4C2, nCr
// 0422 lecture.
