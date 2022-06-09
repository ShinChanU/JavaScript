const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (input) => {
  let [n, m] = input[0].split(" ").map((e) => +e);
  let matA = input.slice(1, n + 1).map((e) => e.split("").map((e) => +e));
  let matB = input.slice(n + 1).map((e) => e.split("").map((e) => +e));
  let answer = 0;
  if (JSON.stringify(matA) == JSON.stringify(matB)) return 0;

  const change = (x, y) => {
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        matA[i][j] = matA[i][j] ? 0 : 1;
      }
    }
  };

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (matA[i][j] !== matB[i][j]) {
        change(i, j);
        answer++;
        if (JSON.stringify(matA) == JSON.stringify(matB)) return answer;
      }
    }
  }

  return -1;
};

console.log(solution(input));

// 0609
// greedy
