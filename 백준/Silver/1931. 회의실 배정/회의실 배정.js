const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (input) => {
  let N = +input[0];
  let timeArr = input.slice(1).map((e) => e.split(" ").map((e) => +e));
  let answer = 1;

  timeArr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let temp = timeArr[0][1]; // 처음 end
  for (let i = 1; i < N; i++) {
    let [start, end] = timeArr[i];
    if (start >= temp) {
      temp = end;
      answer++;
    }
  }

  console.log(answer);
};

solution(input);
