const solution = (num, k) => {
  let answer = 0;

  const DFS = (L, n) => {
    if (n.length === num.length - k) {
      answer = Math.max(answer, parseInt(n));
      return;
    }
    if (L === num.length) {
      if (n.length === num.length - k) answer = Math.max(answer, parseInt(n));

      return;
    } else {
      DFS(L + 1, n + num[L]);
      DFS(L + 1, n);
    }
  };

  DFS(0, "");

  return answer.toString();
};

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));

// 0501 시간초과 fail, DFS는 아닌듯..
