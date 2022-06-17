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
  let [N, K] = input[0].split(" ").map((e) => +e);
  let arr = input.slice(1).map((e) => e.split(" ").map((e) => +e));
  let dy = Array.from({ length: K + 1 }, () => 0);

  for (let i = 0; i < N; i++) {
    let [w, v] = arr[i];
    let tmp = dy.slice();
    for (let j = w; j <= K; j++) {
      if (v + dy[j - w] > dy[j]) {
        tmp[j] = v + dy[j - w];
      }
    }
    dy = tmp;
  }

  return dy[K];
};

console.log(solution(input));
