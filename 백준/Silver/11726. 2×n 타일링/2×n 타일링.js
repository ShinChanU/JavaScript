const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (n) => {
  let answer;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < dy.length; i++) {
    dy[i] = (dy[i - 2] + dy[i - 1]) % 10007;
  }
  answer = dy[n];
  console.log(answer);
};

solution(+input[0]);
