const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let N = +input[0];
let GRAPH = input.slice(1).map((e) => e.split("").map((e) => +e));

const solution = (n, graph) => {
  let answer = [];
  let queue = [];
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j]) {
        let cnt = 1;
        graph[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < dx.length; k++) {
            let [nx, ny] = [x + dx[k], y + dy[k]];
            if (nx >= 0 && ny >= 0 && nx < n && ny <= n && graph[nx][ny]) {
              graph[nx][ny] = 0;
              cnt++;
              queue.push([nx, ny]);
            }
          }
        }
        answer.push(cnt);
      }
    }
  }
  answer.sort((a, b) => a - b);

  console.log(answer.length + "\n" + answer.join("\n"));
};

solution(N, GRAPH);
