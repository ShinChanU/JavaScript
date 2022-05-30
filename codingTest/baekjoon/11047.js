const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
input = input[0] === "" ? [] : input;
let first = input[0].split(" ").map((e) => Number(e));
let gN = first[0];
let gK = first[1];
let gArray = input.slice(1).map((e) => Number(e));

const solution = (n, k, arr) => {
  let answer = 0;
  let remain = k;
  arr.reverse();
  for (let x of arr) {
    if (remain >= x) {
      let cnt = Math.floor(remain / x);
      answer += cnt;
      remain -= cnt * x;
    }
  }
  return answer;
};

console.log(solution(gN, gK, gArray));
// 0530
