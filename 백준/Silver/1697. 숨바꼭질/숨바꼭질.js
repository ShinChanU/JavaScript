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
  let [N, K] = input[0].split(" ").map((e) => +e);
  let ch = Array.from({ length: 100001 }, () => 0);
  let queue = [[N, 0]];
  ch[N] = 1;

  while (queue.length) {
    let [pos, cnt] = queue.shift();
    if (pos === K) {
      console.log(cnt);
      break;
    }
    for (next of [pos - 1, pos + 1, pos * 2]) {
      if (!ch[next] && next >= 0 && next <= 100000) {
        ch[next] = 1;
        queue.push([next, cnt + 1]);
      }
    }
  }
};

solution(input);