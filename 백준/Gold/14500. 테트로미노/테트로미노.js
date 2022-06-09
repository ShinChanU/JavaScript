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
  let matrix = input.slice(1).map((e) => e.split(" ").map((e) => +e));
  let ch = Array.from({ length: n }, () => Array(m).fill(0));

  let dx = [-1, 0, 1, 0]; // 12 3 6 9
  let dy = [0, 1, 0, -1];

  const DFS = (L, hap, start) => {
    if (L === 3) {
      answer = Math.max(answer, hap);
      return;
    } else {
      for (let i = 0; i < dx.length; i++) {
        let nx = start[0] + dx[i];
        let ny = start[1] + dy[i];
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && !ch[nx][ny]) {
          ch[nx][ny] = 1;
          DFS(L + 1, hap + matrix[nx][ny], [nx, ny]);
          ch[nx][ny] = 0;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ch[i][j] = 1;
      DFS(0, matrix[i][j], [i, j]);
      ch[i][j] = 0;
      for (let k1 = 0; k1 < dx.length; k1++) {
        for (let k2 = 0; k2 < dx.length; k2++) {
          for (let k3 = 0; k3 < dx.length; k3++) {
            let nx1 = i + dx[k1];
            let ny1 = j + dy[k1];
            let nx2 = i + dx[k2];
            let ny2 = j + dy[k2];
            let nx3 = i + dx[k3];
            let ny3 = j + dy[k3];
            if (
              k1 !== k2 &&
              k1 !== k3 &&
              k2 !== k3 &&
              nx1 >= 0 &&
              nx1 < n &&
              ny1 >= 0 &&
              ny1 < m &&
              nx2 >= 0 &&
              nx2 < n &&
              ny2 >= 0 &&
              ny2 < m &&
              nx3 >= 0 &&
              nx3 < n &&
              ny3 >= 0 &&
              ny3 < m
            ) {
              let tmp =
                matrix[i][j] +
                matrix[nx1][ny1] +
                matrix[nx2][ny2] +
                matrix[nx3][ny3];
              answer = Math.max(answer, tmp);
              tmp = 0;
            }
          }
        }
      }
    }
  }

  return answer;
};

console.log(solution(input));