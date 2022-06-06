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
  // n 은 시리즈 순서
  let answer = 0;
  let cnt = 0;
  let regex = /666/i;
  let i = 666;

  while (cnt < n) {
    if (regex.test(i.toString())) {
      cnt++;
      answer = i;
    }
    i++;
  }

  return answer;
};

console.log(solution(Number(input[0])));
// 0606
