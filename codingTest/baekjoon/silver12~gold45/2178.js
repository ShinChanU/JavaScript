const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (n, m, graph) => {
  let ch = Array.from({ length: n }, () => Array(m).fill(0));
  let answer = Number.MAX_SAFE_INTEGER;
  let queue = [];

  let dxy = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // BFS로 해결, 첫 지점부터 끝까지 탐색은 너비우선..
  ch[0][0] = 1;
  queue.push([0, 0, 1]);
  while (queue.length) {
    let [x, y, cnt] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      answer = Math.min(answer, cnt);
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dxy[i][0];
      let ny = y + dxy[i][1];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny <= m &&
        !ch[nx][ny] &&
        graph[nx][ny]
      ) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }

  console.log(answer);

  // DFS 시간 초과
  // const DFS = (v, cnt) => {
  //   let [x, y] = v;
  //   console.log(ch);
  //   if (x === n - 1 && y === m - 1) {
  //     answer = Math.min(answer, cnt);
  //     return;
  //   } else {
  //     for (let i = 0; i < 4; i++) {
  //       let nx = x + dxy[i][0];
  //       let ny = y + dxy[i][1];
  //       if (
  //         nx >= 0 &&
  //         nx < n &&
  //         ny >= 0 &&
  //         ny <= m &&
  //         !ch[nx][ny] &&
  //         graph[nx][ny]
  //       ) {
  //         ch[nx][ny] = 1;
  //         DFS([nx, ny], cnt + 1);
  //         ch[nx][ny] = 0;
  //       }
  //     }
  //   }
  // };

  // ch[0][0] = 1;
  // DFS([0, 0], 1);

  // console.log(answer);
};

let [N, M] = input[0].split(" ").map((e) => +e);
let graphArr = input.slice(1).map((e) => e.split("").map((e) => +e));
solution(N, M, graphArr);
