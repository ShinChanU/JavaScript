// 중복 순열
const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: 2 }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      console.log(tmp);
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };

  DFS(0);

  return answer.length;
};

console.log(solution(3, 2));

// 0419 study, lecture
