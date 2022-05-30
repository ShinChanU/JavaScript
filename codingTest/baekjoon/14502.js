// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./testCase.txt";
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((e) => e.trim());
// input = input[0] === "" ? [] : input;
// let first = input[0].split(" ").map((e) => Number(e));
// let gN = first[0]; // 세로크기
// let gM = first[1]; // 가로크기
// let gArray = input.slice(1).map((e) => e.split(" ").map((e) => Number(e)));

const solution = (n, m, arr) => {
  let answer = 0;
  let flag = [];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const searchVirus = (tmpArr) => {
    // 3개의 벽이 세워진 arr 영역 탐색
    let queue = [];
    let cnt = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tmpArr[i][j] === 0) cnt++;
        if (tmpArr[i][j] === 2) {
          queue.push([i, j]);
        }
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < dx.length; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
              nx >= 0 &&
              nx < n &&
              ny >= 0 &&
              ny < m &&
              tmpArr[nx][ny] === 0
            ) {
              tmpArr[nx][ny] = 2;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
    console.log(cnt);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        flag.push([i, j]);
      }
    }
  }

  for (let i = 0; i < flag.length; i++) {
    let [ix, iy] = flag[i];
    arr[ix][iy] = 1;
    for (let j = i + 1; j < flag.length; j++) {
      let [jx, jy] = flag[j];
      arr[jx][jy] = 1;
      for (let k = j + 1; k < flag.length; k++) {
        let [kx, ky] = flag[k];
        arr[kx][ky] = 1;
        searchVirus(arr);
        arr[kx][ky] = 0;
      }
      arr[jx][jy] = 0;
    }
    arr[ix][iy] = 0;
  }

  return answer;
};

// console.log(solution(gN, gM, gArray));
let matrix = [
  [2, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 2, 0],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
];

console.log(solution(7, 7, matrix));
