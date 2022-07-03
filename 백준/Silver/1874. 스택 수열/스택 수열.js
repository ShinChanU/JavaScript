const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let N = +input[0];
let array = input.slice(1).map((e) => +e);

const solution = (n, arr) => {
  let answer = ["+"];
  let numArr = Array.from({ length: n - 1 }, () => n);
  numArr = numArr.map((e, i) => e - i);
  let stack = [1];
  let cnt = n;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    while (numArr.length || cnt > 0) {
      if (!stack.includes(tmp)) {
        if (numArr.length < 1) break;
        stack.push(numArr.pop());
        answer.push("+");
      } else {
        let x = stack.pop();
        answer.push("-");
        if (x === tmp) {
          cnt--;
          break;
        }
      }
    }
  }

  if (cnt > 0) return "NO";
  if (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      answer.push("-");
    }
  }

  return answer.join("\n");
};

console.log(solution(N, array));
