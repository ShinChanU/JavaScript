const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../testCase.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let N = +input[0];
let TARGET;
let GRAPH = input.slice(1).map((e, i) =>
  e.split(" ").map((e2, i2) => {
    if (e2 === "0") TARGET = [i, i2];
    return +e2;
  })
);

const solution = (n, graph, target) => {
  let answer = {};
  let RowHap = [];
  let ColHap = [];
  let DiaHap = [];

  let dia1 = 0;
  let dia2 = 0;
  graph.forEach((e, i) => {
    RowHap.push(e.reduce((a, b) => a + b));
    let col = 0;
    for (let j = 0; j < n; j++) {
      col += graph[i][j];
      if (i === j) dia1 += graph[i][j];
      if (i + j === n - 1) dia2 += graph[i][j];
    }
    ColHap.push(col);
  });
  DiaHap.push(dia1, dia2);
  for (let i = 0; i < n; i++) {
    if (answer[RowHap[i]] === undefined) answer[RowHap[i]] = 1;
    else answer[RowHap[i]] += 1;
    if (answer[ColHap[i]] === undefined) answer[ColHap[i]] = 1;
    else answer[ColHap[i]] += 1;
    if (i < 2) {
      if (answer[DiaHap[i]] === undefined) answer[DiaHap[i]] = 1;
      else answer[DiaHap[i]] += 1;
    }
  }

  let cnt = 0;
  let tmp = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (let key in answer) {
    cnt++;
    max = max < +key ? +key : max;
    min = min > +key ? +key : min;
    tmp = tmp < answer[key] ? answer[key] : tmp;
  }

  if (cnt > 2) return -1;
  if (tmp < (2 * n + 2) / 2) return -1;

  return max - min;
};

console.log(solution(N, GRAPH, TARGET));
