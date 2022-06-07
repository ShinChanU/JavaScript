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
  let answer = [];
  let stack = [];

  for (let x of arr) {
    let [cmd, num] = x.split(" ");
    let n = stack.length;
    switch (cmd) {
      case "push":
        stack.push(Number(num));
        break;
      case "pop":
        let data = stack.pop();
        answer.push(data === undefined ? -1 : data);
        break;
      case "size":
        answer.push(n);
        break;
      case "empty":
        answer.push(n > 0 ? 0 : 1);
        break;
      case "top":
        answer.push(stack[n - 1] === undefined ? -1 : stack[n - 1]);
        break;
      default:
        break;
    }
  }
  console.log(answer.join("\n"));
};

solution(input.slice(1));
// 0607
