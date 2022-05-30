const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./testCase.txt";
// const filePath = "/dev/stdin";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input[0] === "" ? [] : input;
let num = input.map((e) => e.trim());

const solution = (num) => {
  let answer;
  let arr = [];
  arr = num.map((e) => {
    return e % 42;
  });
  let set = new Set(arr);
  const uniqueArr = [...set];
  answer = uniqueArr.length;
  return answer;
};

console.log(solution(num));
