const solution = (s) => {
  let result; // 삭제 가능 1, 삭제 불가 0
  let stack = [];
  let n = s.length;
  if (n === 0) return 0;
  let tmp;
  if (n > 0) stack.push(s[0]);
  for (let i = 1; i < n; i++) {
    tmp = 0;
    let sL = stack.length;
    if (sL > 0) tmp = stack[sL - 1];
    if (tmp === s[i]) stack.pop();
    else stack.push(s[i]);
  }

  if (stack.length) result = 0;
  else result = 1;

  return result;
  D;
};

console.log(solution("baabaa"));
console.log(solution("cdcd"));
console.log(solution("aaaaa"));
