const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e.trim());

const solution = (arr) => {
  let answer = [];

  const isPrime = (n) => {
    let flag = true; // 소수가 맞음
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  const primeCnt = (n1, n2) => {
    let cnt = 0;
    for (let x = n1; x <= n2; x++) {
      if (isPrime(x)) cnt++;
    }
    return cnt;
  };

  for (let x of arr) {
    // 모든 배열 탐색
    let [min, max] = [x + 1, x * 2]; // 둘사이의 소수의 개수를 찾는다
    answer.push(primeCnt(min, max));
  }

  console.log(answer.join("\n"));
};

solution(input.slice(0, input.length - 1));
//  소수 찾기 에스트로라의체인가...
