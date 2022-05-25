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
  console.log(solution(input));
  process.exit();
});

const solution = (input) => {
  input = input.map((e) => e.split(" ").map((str) => Number(str)));
  let [n, m] = input[0];
  let cards = input[1];
  let answer = 0;
  for (let i = 0; i < cards.length - 2; i++) {
    let hap = 0;
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        hap = cards[i] + cards[j] + cards[k];
        if (answer < hap && hap <= m) answer = hap;
      }
    }
  }
  return answer;
};
