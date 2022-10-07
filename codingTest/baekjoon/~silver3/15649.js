const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (n, m) => {
  // n까지 자연수중 m개의 길이인 수열 전체 return
  let answer = [];
  let one = 1;
  const numArr = Array.from({ length: +n }, (_, k) => ++k);
  let ch = Array.from({ length: +n }, () => 0);

  const DFS = (L, arr, check) => {
    // L은 뽑은 개수
    if (L === +m) {
      answer.push(arr);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (!check[i]) {
          check[i] = 1;
          DFS(L + 1, [...arr, numArr[i]], check);
          check[i] = 0;
        }
      }
    }
  };

  DFS(0, [], ch);

  console.log(answer.map((e) => e.join(" ")).join("\n"));
};

solution(...input[0].split(" "));
/*
n, m
4, 2

1, 2, 3, 4 => 2개씩
*/
