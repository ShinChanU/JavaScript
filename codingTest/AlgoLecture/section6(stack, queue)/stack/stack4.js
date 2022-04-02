const solution = (str) => {
  let stack = [];

  for (let x of str) {
    if (x.match(/[1-9]/g) !== null) {
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

  return stack[0];
};

console.log(solution("352+*9-"));

// 0402 done.
