const solution = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.pop() !== "(") {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

console.log(solution("(()(()))(()"));

// 0331 done.
