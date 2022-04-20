// 동전교환
const solution = (arr, m) => {
  let answer = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => b - a);
  let n = arr.length;

  const DFS = (L, sum) => {
    if (sum > m) return;
    if (L >= answer) return; // edge cutting
    if (sum === m) {
      console.log(L, sum);
      answer = Math.min(answer, L); // answer가 지정이 되면 answer보다 더 큰 L은 탐색할 필요 X
      return;
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution([1, 2, 5], 15));

// 0420 study, lecture. hard..
