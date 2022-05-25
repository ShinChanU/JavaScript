const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  // input = line.split(" ").map((e) => parseInt(e));
  rl.close(); // 한 줄 입력받고 종료
}).on("close", function () {
  console.log("강한친구 대한육군\n강한친구 대한육군");
  process.exit();
});
