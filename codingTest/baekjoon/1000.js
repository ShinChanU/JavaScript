const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((e) => parseInt(e));
  // input.push(line.split(" ").map((e) => parseInt(e)));
  // rl.close(); // 한 줄 입력받고 종료
}).on("close", function () {
  console.log(input.reduce((a, b) => a + b));
  process.exit();
});
