const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (time, min) => {
  let answer;
  let [tH, tM] = time.split(" ").map((e) => Number(e));
  let addM = Number(min);
  tM += addM;
  let addH = Math.floor(tM / 60);
  tM -= addH * 60;
  tH += addH;
  tH %= 24;

  return `${tH} ${tM}`;
};

console.log(solution(input[0], input[1]));