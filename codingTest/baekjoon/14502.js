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
  let array = arr.map((e) => e.slice());
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const searchVirus = (tmpArr) => {
    // 3개의 벽이 세워진 arr 영역 탐색
    let localArr = tmpArr.map((e) => e.slice());
    console.log("시작");
    console.log(localArr[0]);
    console.log(localArr[1]);
    console.log(localArr[2]);
    console.log(localArr[3]);
    console.log("끝");
    let queue = [];
    let cnt = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (localArr[i][j] === 0) cnt++;
        if (localArr[i][j] === 2) {
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
              localArr[nx][ny] === 0
            ) {
              localArr[nx][ny] = 2;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }

    console.log(cnt);

    if (answer < cnt) {
      console.log(answer, cnt);
      console.log(localArr[0]);
      console.log(localArr[1]);
      console.log(localArr[2]);
      console.log(localArr[3]);
      console.log("--");
    }
    answer = answer < cnt ? cnt : answer;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        flag.push([i, j]);
      }
    }
  }

  for (let i = 0; i < flag.length - 2; i++) {
    let [ix, iy] = flag[i];
    array[ix][iy] = 1;
    for (let j = i + 1; j < flag.length - 1; j++) {
      let [jx, jy] = flag[j];
      array[jx][jy] = 1;
      for (let k = j + 1; k < flag.length; k++) {
        let [kx, ky] = flag[k];
        array[kx][ky] = 1;
        searchVirus(array);
        array[kx][ky] = 0;
      }
      array[jx][jy] = 0;
    }
    array[ix][iy] = 0;
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

let matrix2 = [
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 2],
  [1, 1, 1, 0, 0, 2],
  [0, 0, 0, 0, 0, 2],
];

console.log(solution(4, 6, matrix2));
// 0531 bfs 시도중
