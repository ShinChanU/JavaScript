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
console.log(solution("(())())"));
console.log(solution("(())()"));

// 0331 done.
// 0401 강의 보고 수정.
