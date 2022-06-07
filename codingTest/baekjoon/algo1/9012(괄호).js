const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (arr) => {
  let answer;
  let stack;
  answer = arr.map((e) => {
    stack = [];
    let n = e.length;
    for (let i = 0; i < n; i++) {
      if (e[i] === "(") stack.push(e[i]);
      else {
        if (stack.pop() !== "(") return "NO";
      }
    }
    return stack.length > 0 ? "NO" : "YES";
  });
  console.log(answer.join("\n"));
};

solution(input.slice(1));
// 0607
