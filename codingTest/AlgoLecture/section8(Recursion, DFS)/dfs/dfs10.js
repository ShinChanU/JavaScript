// 조합의 경우의 수(메모이제이션) nCr
const solution = (n, r) => {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0)); // 넉넉하게 35, 메모이제이션

  const DFS = (n, r) => {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)); // dy배열에 계산한 값 저장
  };

  answer = DFS(n, r);

  return answer;
};

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200

// 0420 study, lecture
