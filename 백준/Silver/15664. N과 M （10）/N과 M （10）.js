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
  let arr = input[1]
    .split(" ")
    .map((e) => +e)
    .sort((a, b) => a - b);
  let answer;
  let set = new Set();
  let ch = Array.from({ length: n }, () => 0);

  const DFS = (L, el) => {
    if (L === m) {
      let re = el
        .split(" ")
        .sort((a, b) => a - b)
        .join(" ")
        .trim();
      set.add(re);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (!ch[i]) {
          ch[i] = 1;
          DFS(L + 1, el + " " + arr[i]);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0, "");

  answer = [...set].join("\n");

  return answer;
};

console.log(solution(input));