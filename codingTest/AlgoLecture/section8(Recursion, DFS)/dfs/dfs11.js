// 수열 추측하기
// 조합 nCr

const solution = (n, f) => {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 메모지에이션을 위해
  let ch = Array.from({ length: n + 1 }, () => 0); // ch는 순열 체크 배열(1~n 이므로)
  let tmp = Array.from({ length: n }, () => 0); // 순열을 모아둘 배열
  let b = Array.from({ length: n }, () => 0); // 조합을 모아둘 배열

  const combination = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
    }
  };

  for (let i = 0; i < n; i++) b[i] = combination(n - 1, i);

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === f) {
      answer = tmp.slice();
      flag = 1;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = i; // push pop 으로도 가능
          DFS(L + 1, sum + b[L] * tmp[L]);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution(4, 16));

// 0422, 순열 + 조합 + 메모지에이션
// study, lecture
