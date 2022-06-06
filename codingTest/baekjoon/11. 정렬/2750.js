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
  let answer = arr.sort((a, b) => a - b);
  console.log(answer.join("\n")); // clg 는 오래 걸림..
};

solution(input.slice(1));
// 0606
