const solution = (s) => {
  let answer = "";
  let n = s.length;
  let mid = Math.floor(n / 2);
  if (n % 2) {
    answer = s[mid];
  } else answer = s[mid - 1] + s[mid];

  return answer;
};

console.log(solution("abcde"));
console.log(solution("qwer"));
// 0611
// 문자열
