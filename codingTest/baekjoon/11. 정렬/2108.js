const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e.trim()));

const solution = (arr) => {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let modeArr = {};
  let avg = Math.round(arr.reduce((a, b) => a + b) / n);
  let mid = arr[Math.floor(n / 2)];
  let range = arr[n - 1] - arr[0];
  let max = 0;
  console.log(arr, avg, mid, range);
  for (let x of arr) {
    if (modeArr[x] === undefined) modeArr[x] = 1;
    else modeArr[x]++;
  }
  for (let key in modeArr) {
    if (modeArr[key] > max) max = modeArr[key];
  }

  console.log(arr, avg, mid, range, max);
};

solution(input.slice(1));
// 0606
// 푸는중
