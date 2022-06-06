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
  let answer = n;

  const hap = (num) => {
    return (
      num +
      num
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b), 0)
    );
  };

  for (let i = n; i > 0; i--) {
    let hapNum = hap(i);
    if (hapNum === n && answer > i) answer = i;
  }

  if (answer === n) answer = 0;

  return answer;
};

console.log(solution(Number(input[0])));
// 0606
