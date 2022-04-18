const solution = (c, arr) => {
  // c를 넘지마라
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  const DFS = (L, sum) => {
    if (sum > c) return; // 넘어오는 sum을 먼저 필터링해서 return
    if (L === n) {
      if (sum < c) {
        answer = Math.max(answer, sum);
      }
    } else {
      DFS(L + 1, sum + arr[L]); // L을 더하는 경우
      DFS(L + 1, sum); // L을 더하지 않는 경우
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution(259, [81, 58, 42, 33, 61])); // output: 242

// 0418 study, lecture
