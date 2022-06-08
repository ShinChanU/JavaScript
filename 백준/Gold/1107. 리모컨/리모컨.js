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
  let target = +input[0];
  let N = +input[1];
  let remove = [];
  if (N > 0) {
    remove = input[2].split(" ").map((v) => +v);
  }
  let answer1 = Math.abs(target - 100);
  let answer2 = Number.MAX_SAFE_INTEGER;
  const Max = 999999;

  const check = (n) => {
    let tmp = n;
    while (1) {
      let rest = tmp % 10;
      if (remove.includes(rest)) return false;
      else tmp = Math.floor(tmp / 10);
      if (tmp === 0) break;
    }
    return true;
  };

  for (let i = 0; i <= Max; i++) {
    if (check(i)) {
      let tmp = i.toString().length + Math.abs(target - i);
      if (tmp < answer2) answer2 = tmp;
      else if (tmp > answer2) break;
    }
  }

  let answer = Math.min(answer1, answer2);
  return answer;
};

console.log(solution(input));