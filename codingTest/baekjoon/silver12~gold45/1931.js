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
  let answer = Number.MIN_SAFE_INTEGER;

  timeArr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < N; i++) {
    let cnt = 0;
    let [prevS, prevE] = timeArr[i];
    cnt++;
    for (let j = i + 1; j < N; j++) {
      let [nextS, nextE] = timeArr[j];
      if (prevE <= nextS) {
        prevS = nextS;
        prevE = nextE;
        cnt++;
      } else continue;
    }
    answer = Math.max(answer, cnt);
  }

  console.log(answer);
};

solution(input);
