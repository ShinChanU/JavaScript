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
  let answer = 0;
  let [n, m] = input[0].split(" ").map((e) => +e);
  let edges = input.slice(1).map((e) => e.split(" ").map((e) => +e));
  let graph = Array.from({ length: n + 1 }, () => []);
  let ch = Array.from({ length: n + 1 }, () => 0);
  let queue = [];

  edges.forEach((e) => {
    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);
  });

  for (let i = 1; i <= n; i++) {
    let arr = graph[i];
    for (let j = 0; j < arr.length; j++) {
      if (!ch[arr[j]]) {
        ch[i] = 1;
        ch[arr[j]] = 1;
        queue.push([i, arr[j]]);
      }
    }
    if (queue.length > 0) answer++;
    while (queue.length) {
      let [x, y] = queue.shift();
      let nextArr = graph[y];
      for (let k = 0; k < nextArr.length; k++) {
        if (!ch[nextArr[k]]) {
          ch[nextArr[k]] = 1;
          queue.push([y, nextArr[k]]);
        }
      }
    }
  }

  for (let i = 1; i < ch.length; i++) {
    if (!ch[i]) answer++;
  }

  return answer;
};

console.log(solution(input));
