// const fs = require("fs");
// const filePath = "/dev/stdin";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const solution = (input) => {
//   if (input[0] === "") return 0;
//   return input.length;
// };

// console.log(solution(input));

const solution4 = (id) => {
  let answer = "";
  let n = id.length;
  let maskingN = Math.floor(n / 2);
  let startCnt = Math.floor(maskingN / 2);
  answer += id.slice(0, startCnt);
  for (i = 0; i < maskingN; i++) {
    answer += "*";
  }
  answer += id.slice(startCnt + maskingN);

  return answer;
};

const id = ["hcmsjfb2e5", "k9t0nio7e", "da2ssb3v", "k0r6k9", "7do98"];

// console.log(solution4(id[0]));
// console.log(solution4(id[1]));
// console.log(solution4(id[2]));
// console.log(solution4(id[3]));
// console.log(solution4(id[4]));

const solution6 = (html) => {
  let answer = true;
  let n = html.length;

  for (let i = 0; i < n; i++) {
    let str = html[i];
    if (str === "<") {
    }
  }

  return answer;
};

console.log(solution6("<div></div>"));
console.log(solution6("<div>"));
console.log(solution6("<img />"));

function solution(html) {
  var answer = true;
  let open = [];
  let close = [];
  let now = "no";

  const stackIn = (e) => {
    if (now === "open") {
      open.push(e);
    } else if ("close") {
      close.push(e);
    } else {
      return false;
    }
  };

  for (let e of html) {
    if (e === "<") {
      now = "open";
    }
    if (stackIn(e) === false) {
      return false;
    }
    console.log(open, close);
  }

  return answer;
}
