const solution = (str) => {
  let answer = 0;
  let stack1 = [];
  let stack2 = [];
  let i = 0;

  while (i < str.length) {
    let x = str[i];
    let y = str[i + 1];
    if (x === "(") {
      if (y === ")") {
        if (stack1.length !== 0) stack2.push(x, y);
        i++;
      } else {
        stack1.push(x);
      }
    } else {
      stack1.pop();
      answer += stack2.length / 2 + 1; // (()(())) 예시 해결 X
      console.log(i, stack1, stack2);
      if (stack1.length === 0) {
        stack2 = [];
      }
    }
    i++;
  }

  return answer;
};

console.log(solution("()(((()())(())()))(())"));
// console.log(solution("(((()(()()))(())()))(()())"));

// 0403 doing 강의 듣기
