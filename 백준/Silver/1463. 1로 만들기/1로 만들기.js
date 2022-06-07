const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (num) => {
  let arr = Array.from({ length: num + 1 }, () => 0);
  arr[1] = 0;
  arr[2] = 1;
  arr[3] = 1;
  for (let i = 4; i <= num; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 2 === 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    if (i % 3 === 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
  console.log(arr[num]);
};

input.forEach((e) => solution(Number(e)));