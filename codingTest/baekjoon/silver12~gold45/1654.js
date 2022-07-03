const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let N = +input[0].split(" ")[1];
let LAN = input.slice(1).map((e) => +e);

const solution = (n, arr) => {
  let answer;
  let sum = arr.reduce((a, b) => a + b);
  let lt = 0;
  let rt = Math.ceil(sum / n);
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let cnt = 0;
    arr.forEach((len) => {
      cnt += Math.floor(len / mid);
    });
    if (cnt >= n) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  answer = lt - 1;

  console.log(answer);
};

solution(N, LAN);
