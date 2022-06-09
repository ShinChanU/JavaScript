const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (arg) => {
  let arr = [0];
  arr.push(...arg[0].split(" ").map((e) => Number(e)));
  let n = arr.length;
  let dy = Array.from({ length: n }, () => 0);
  dy[1] = arr[1];

  for (let i = 2; i < n; i++) {
    let max = arr[i];
    for (let j = 1; j <= i / 2; j++) {
      max = Math.max(max, dy[j] + dy[i - j]);
    }
    dy[i] = max;
  }
  console.log(dy[n - 1]);
};

solution(input.slice(1));