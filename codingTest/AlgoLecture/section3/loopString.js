const solution = (str) => {
  let answer = "YES";
  const val = str.toLowerCase();
  const n = val.length;

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    // parseInt() 도 가능
    if (val[i] !== val[n - i - 1]) answer = "NO";
  }

  return answer;
};

console.log(solution("gooG"));
console.log(solution("abcba"));

// 0314

const solution2 = (str) => {
  let answer = "YES";
  const val = str.toLowerCase();

  return val === val.split("").reverse().join("") ? "YES" : "NO";
};

console.log(solution2("gooG"));
console.log(solution2("abcb5"));

// 0315 split, reverse 사용
