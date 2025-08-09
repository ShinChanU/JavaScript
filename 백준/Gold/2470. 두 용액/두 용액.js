const fs = require("fs");

const filePath = process.platform === "linux" ? "dev/stdin" : "test-case.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, strA] = input;
const arr = strA.split(" ").map((str) => Number(str));

const solutions = (N, arr) => {
  arr.sort((a, b) => a - b);

  let L = 0;
  let R = arr.length - 1;

  const result = {
    LIndex: L,
    RIndex: R,
  };

  let closeNumToZero = Number.MAX_SAFE_INTEGER;

  while (L < R) {
    const sum = arr[L] + arr[R];

    if (Math.abs(closeNumToZero) > Math.abs(sum)) {
      closeNumToZero = sum;
      result.LIndex = L;
      result.RIndex = R;
    }

    if(sum < 0) {
      L++;
    } else  {
      R--;
    } 
  }

  console.log(arr[result.LIndex], arr[result.RIndex]);
};

solutions(N, arr);
