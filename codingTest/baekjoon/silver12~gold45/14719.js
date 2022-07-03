const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let [H, W] = input[0].split(" ").map((e) => +e);
let BLOCK = input[1].split(" ").map((e) => +e);

// const solution = (h, w, blockArr) => {
//   let answer = Array.from({ length: w }, () => 0);
//   let flag = 0;
//   let lt = 0;
//   let rt = 1;

//   const between = (l, r) => {
//     if (r === l) return 0;
//     let tmp = Math.min(blockArr[l], blockArr[r]);
//     let hap = 0;
//     for (let i = l + 1; i < r; i++) {
//       if (tmp - blockArr[i] > 0) hap += tmp - blockArr[i];
//     }
//     answer[flag] = answer[flag] < hap ? hap : answer[flag];
//   };

//   while (rt < w) {
//     between(lt, rt);
//     if (blockArr[lt] <= blockArr[rt]) {
//       lt = rt;
//       flag++;
//     }
//     rt++;
//   }
//   console.log(answer.reduce((a, b) => a + b));
// };
// 1%에서 틀렸습니다.

const solution = (h, w, blockArr) => {
  let answer = 0;
  const leftMax = (l, r) => {
    return Math.max(...blockArr.slice(l, r));
  };

  const rightMax = (l, r) => {
    return Math.max(...blockArr.slice(l + 1, r + 1));
  };

  for (let i = 1; i < w - 1; i++) {
    let lt = leftMax(0, i);
    let rt = rightMax(i, w - 1);
    let tmp = Math.min(lt, rt) - blockArr[i];
    if (tmp > 0) answer += tmp;
  }

  console.log(answer);
};

solution(H, W, BLOCK);
// pass, 하나의 요소를 중심으로 좌와 우를 살펴본다
