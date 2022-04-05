const solution = (s) => {
  let answer;
  let stack = [];

  for (let x of s) {
    // if (x.match(/[1-9]/g) !== null) {
    if (!isNaN(x)) {
      // 숫자인지?!
      stack.push(parseInt(x));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      let tmp;
      switch (x) {
        case "+":
          tmp = a + b;
          break;
        case "-":
          tmp = a - b;
          break;
        case "*":
          tmp = a * b;
          break;
        case "/":
          tmp = a / b;
          break;
        default:
          "";
      }
      stack.push(tmp);
    }
  }

  [answer] = stack;

  return answer;
};

console.log(solution("352+*9-"));

// 0402 done.
