const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./testCase.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const solution = (input) => {
  if (input[0] === "") return 0;
  return input.length;
};

console.log(solution(input));

