const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
const N = +input[0];
let ARRAY = Array.from({ length: N }, () => []);
let temp = input.slice(1);
let i = 0;
while (temp.length) {
  let x = temp.shift();
  let tmpArr = x.split(" ").map((e) => +e);
  if (tmpArr.length === 3) {
    ARRAY[i].push(tmpArr[0], tmpArr[1]);
    ARRAY[i].push(temp.slice(0, tmpArr[2]));
    temp = temp.slice(tmpArr[2]);
  }
  i++;
}

const solution = (m, n, arr) => {
  let graph = Array.from({ length: m }, () => Array(n).fill(0));
  arr.forEach((e) => {
    let [x, y] = [+e.split(" ")[0], +e.split(" ")[1]];
    graph[x][y] = 1;
  });
  let answer = 0;
  let queue = [];
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        queue.push([i, j]);
        answer++;
        graph[i][j] = 0;
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < dx.length; k++) {
            let [nx, ny] = [x + dx[k], y + dy[k]];
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && graph[nx][ny]) {
              graph[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
};

let result = [];
ARRAY.forEach((e, i) => {
  let M = e[0];
  let N = e[1];
  let cabbages = e[2];
  result.push(solution(M, N, cabbages));
});

console.log(result.join("\n"));

// BFS
