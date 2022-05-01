const solution = (exp) => {
  let result = 0;

  let priority = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];

  const numArr = exp.split(/\D/);
  const opArr = [];

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "*" || exp[i] === "+" || exp[i] === "-") {
      opArr.push(exp[i]);
    }
  }

  for (let x of priority) {
    let cpNum = numArr.slice();
    let cpOp = opArr.slice();
    for (let op of x) {
      for (let i = 0; i < cpOp.length; i++) {
        if (cpOp[i] === op) {
          let res;
          if (op === "*") {
            res = cpNum[i] * cpNum[i + 1];
          } else if (op === "+") {
            res = Number(cpNum[i]) + Number(cpNum[i + 1]);
          } else if (op === "-") {
            res = Number(cpNum[i]) - Number(cpNum[i + 1]);
          }
          cpNum.splice(i, 2, res);
          cpOp.splice(i, 1);
          i--;
        }
      }
    }
    result = result < Math.abs([cpNum]) ? Math.abs([cpNum]) : result;
  }

  return result;
};

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
// 0501 1시간 30분 소요, pass
// 구글링 조금 참고, slice, splice 활용
