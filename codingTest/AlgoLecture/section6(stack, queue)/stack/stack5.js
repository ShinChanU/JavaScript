const solution = (s) => {
  let answer = 0;
  let stack = [];
  let i = 0;

  while (i < s.length) {
    let x = s[i];
    let y = s[i + 1];
    if (x === "(") {
      if (y === ")") {
        if (stack.length !== 0) answer += stack.length;
        i++;
      } else {
        stack.push(x);
      }
    } else {
      stack.pop();
      answer += 1;
    }
    i++;
  }

  return answer;
};

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));

// 0403 doing 강의 듣기

const solution2 = (s) => {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else answer += 1;
    }
  }

  return answer;
};

console.log(solution2("()(((()())(())()))(())"));
console.log(solution2("(((()(()()))(())()))(()())"));

// 0403 강의 보고 수정
