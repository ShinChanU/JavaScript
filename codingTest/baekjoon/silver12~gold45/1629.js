const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
const ABC = input[0].split(" ").map((e) => +e);

const solution = (abc) => {
  let [a, b, c] = abc;
  // let answer = Math.pow(a, b) % c;
  // let answer = a ** b % c;
  let answer = [];
  for (let i = 1; i < 30; i++) {
    console.log(a ** i, a ** i % c);
    answer.push(Math.pow(a, i) % c);
  }

  if (c === 1) return;

  console.log(answer);
};

solution(ABC);
// 0626 doing.. math.. hard..
