const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  if (!line) {
    rl.close();
  } else {
    input.push(line);
  }
}).on("close", function () {
  solution(input).map((e) => console.log(e));
  process.exit();
});

const solution = (input) => {
  input = input.map((e) => e.split(" ").map((str) => Number(str)));
  let n = input[0];
  let weights = input.slice(1);
  let answer = [];

  for (let i = 0; i < n; i++) {
    let rank = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (weights[i][0] < weights[j][0] && weights[i][1] < weights[j][1]) {
        rank++;
      }
    }
    answer.push(rank);
  }

  return answer;
};