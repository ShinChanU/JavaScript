const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((e) => parseInt(e));
  rl.close();
}).on("close", () => {
  solution(input);
  process.exit();
});

const solution = (input) => {
  let answer;
  const a = input[0];
  const b = input[1];

  if (a > b) answer = ">";
  else if (a < b) answer = "<";
  else answer = "==";

  console.log(answer);
};
