const solution = (str) => {
  let answer = "YES";
  const val = str.toLowerCase();
  const n = val.length;

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    if (val[i] !== val[n - i - 1]) answer = "NO";
  }

  return answer;
};

console.log(solution("gooG"));
console.log(solution("abcba"));

// 0314
