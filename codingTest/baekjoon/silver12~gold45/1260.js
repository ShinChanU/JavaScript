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
  let [N, M, V] = input[0].split(" ").map((e) => +e); // N: 정점개수, M: 간선개수, V: 탐색시작 정점 번호
  let graphArr = input.slice(1).map((e) => e.split(" ").map((e) => +e));
  let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  let ch = Array.from({ length: N + 1 }, () => 0);
  let answerDFS = [];
  let answerBFS = [];
  graphArr.forEach((e) => {
    let [x, y] = e;
    graph[x][y] = 1;
    graph[y][x] = 1;
  });
  let queue = [];

  const DFS = (L, v) => {
    if (L === N - 1) {
      return;
    } else {
      let arr = graph[v];
      for (let i = 1; i <= N; i++) {
        if (arr[i] && !ch[i]) {
          ch[i] = 1;
          answerDFS.push(i);
          DFS(L + 1, i);
        }
      }
    }
  };

  ch[V] = 1;
  answerDFS.push(V);
  DFS(0, V);

  ch = ch.map((e) => (e = 0));
  queue.push(V);
  ch[V] = 1;
  while (queue.length) {
    let x = queue.shift();
    answerBFS.push(x);
    let arr = graph[x];
    arr.forEach((e, i) => {
      if (e && !ch[i]) {
        ch[i] = 1;
        queue.push(i);
      }
    });
  }

  console.log(answerDFS.join(" ") + "\n" + answerBFS.join(" "));
};

solution(input);
