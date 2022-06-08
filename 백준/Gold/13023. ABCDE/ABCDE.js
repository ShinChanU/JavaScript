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
  const [n, m] = input[0].split(" ").map((v) => +v);
  const graph = Array.from({ length: n }, () => Array(0));
  const ch = Array.from({ length: n }, () => 0);
  let flag = 0;

  for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map((v) => +v);
    graph[a].push(b);
    graph[b].push(a);
  }
  const DFS = (L, cnt) => {
    if (flag) return;
    if (cnt === 4) {
      flag = 1;
      return;
    }
    for (let i = 0; i < graph[L].length; i++) {
      let node = graph[L][i];
      if (!ch[node]) {
        ch[L] = 1;
        DFS(node, cnt + 1);
        ch[L] = 0;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    ch[i] = 1;
    DFS(i, 0);
    ch[i] = 0;
  }
  return flag;
};

console.log(solution(input));