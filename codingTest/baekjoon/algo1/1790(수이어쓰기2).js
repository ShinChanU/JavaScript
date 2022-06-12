const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const solution2 = (input) => {
  let [n, k] = input[0].split(" ").map((e) => +e);
  let numStr = "";
  for (let i = 1; i <= n; i++) {
    numStr += i;
  }
  let strL = numStr.length;
  if (strL < k) return -1;

  return numStr[k - 1]; // 메모리 초과
};

const solution = (input) => {
  let [n, k] = input[0].split(" ").map((e) => +e);

  // k번째 수를 일단 찾음 그리고 n과 비교
  let first = 9;
  let i = 1;
  while (1) {
    if (k - first * i <= 0) break;
    else k -= first * i;
    first *= 10;
    i++;
  }
  let tmpFirst = first / 9;
  let seq = Math.floor(k / i); // tmpFirst부터 seq
  let rest = k % i;
  let resultN = tmpFirst + seq - 1;
  if (resultN > n) return -1;
  else {
    if (resultN === n && rest > 0) return -1;
  }
  let singleN;
  if (rest === 0) singleN = resultN % 10;
  else {
    let tmp = (resultN + 1).toString();
    singleN = +tmp[rest - 1];
  }

  return singleN;
};

console.log(solution(input));

// 0610
