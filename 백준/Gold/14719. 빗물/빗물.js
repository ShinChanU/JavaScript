const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let [H, W] = input[0].split(" ").map((e) => +e);
let BLOCK = input[1].split(" ").map((e) => +e);
const solution = (h, w, blockArr) => {
  let answer = 0;
  const leftMax = (l, r) => {
    return Math.max(...blockArr.slice(l, r));
  };

  const rightMax = (l, r) => {
    return Math.max(...blockArr.slice(l + 1, r + 1));
  };

  for (let i = 1; i < w - 1; i++) {
    let lt = leftMax(0, i);
    let rt = rightMax(i, w - 1);
    let tmp = Math.min(lt, rt) - blockArr[i];
    if (tmp > 0) answer += tmp;
  }

  console.log(answer);
};

solution(H, W, BLOCK);