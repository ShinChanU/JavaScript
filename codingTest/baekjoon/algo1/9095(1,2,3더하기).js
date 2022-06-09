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
  let n = +input[0];
  let arr = input.slice(1).map((e) => +e);
  let answer = [];
  let cnt;

  const DFS = (hap, target) => {
    if (hap > target) return;
    if (hap === target) {
      cnt++;
      return;
    } else {
      DFS(hap + 1, target);
      DFS(hap + 2, target);
      DFS(hap + 3, target);
    }
  };

  for (let x of arr) {
    cnt = 0;
    DFS(0, x, 0);
    answer.push(cnt);
  }

  return answer.join("\n");
};

console.log(solution(input));

// 0609
// DFS
