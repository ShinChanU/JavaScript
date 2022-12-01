const solution = (exp) => {
  let answer = Number.MIN_SAFE_INTEGER;
  exp = exp.replace(/x/g, "*");

  let splitExp = exp.split("");
  let n = splitExp.length;

  const calculator = (arr) => {
    return eval(arr.join(""));
  };

  for (let i = 0; i < n; i += 2) {
    for (let j = i; j < n; j += 2) {
      let tmpI = splitExp[i];
      let tmpJ = splitExp[j];
      splitExp[i] = "(" + splitExp[i];
      splitExp[j] = splitExp[j] + ")";
      answer = Math.max(calculator(splitExp), answer);
      splitExp[i] = tmpI;
      splitExp[j] = tmpJ;
    }
  }

  return answer;
};

const exp1 = "2-1x5-4x3+2";
const exp2 = "2x3-1";

console.log(solution(exp1));
console.log(solution(exp2));
