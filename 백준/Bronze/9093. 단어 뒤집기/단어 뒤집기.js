const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution = (arr) => {
  let answer = [];

  for (let x of arr) {
    let strArr = x.split(" ");
    let test = strArr.map((e, i) => {
      let str = "";
      for (let i = e.length - 1; i >= 0; i--) {
        str += e[i];
      }
      return str;
    });
    answer.push(test.join(" "));
  }

  console.log(answer.join("\n"));
};

solution(input.slice(1));