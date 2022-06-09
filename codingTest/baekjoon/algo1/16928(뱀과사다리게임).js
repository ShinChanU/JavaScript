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
  let ladders = input.slice(1, n + 1).map((e) => e.split(" ").map((e) => +e));
  let snakes = input.slice(n + 2).map((e) => e.split(" ").map((e) => +e));
  let queue = [];
  let graph = Array.from({ length: 10 }, () => []);
  for (let i = 0; i < 10; i++) {
    graph[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => e + i * 10);
  }

  queue.push(graph[0][0]);

  while (queue.length) {}
};

console.log(solution(input));

// 0609,, doing,, 어려움
// BFS
