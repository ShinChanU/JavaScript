const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (num) => {
  return num - 543;
};

console.log(solution(Number(input[0])));
// 0606
