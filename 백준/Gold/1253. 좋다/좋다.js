const fs = require("fs");

const filePath = process.platform === "linux" ? "dev/stdin" : "1253.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, strA] = input;
const arr = strA.split(" ").map((str) => Number(str));

const solutions = (N, arr) => {
  let answer = 0;

  arr.sort((a, b) => a - b)

  for (let i = 0; i < N; i++) {
    const target = arr[i];

    let L = 0;
    let R = N - 1;

    while(L < R) {
      if(L === i) { L++; continue; }
      if(R === i) { R--; continue; }
    
      const sum = arr[L] + arr[R];
      if(target === sum) {
        answer += 1;
        break;
      } 

      if(sum < target) L++;
      else R--
    }
  }

  return answer;
};

console.log(solutions(N, arr));

