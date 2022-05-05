const solution = (s) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = s.length;
  let str = "";

  for (let i = 1; i <= n / 2; i++) {
    let j = 0;
    let cnt = 0;
    let len = 0;
    while (j < n) {
      let tmp = s.substr(j, i);
      if (tmp.length !== i) {
        len += tmp.length;
      } else if (str === tmp) {
        cnt++;
      } else {
        if (cnt > 0) {
          len++;
          cnt = 0;
        }
        str = tmp;
        len += i;
      }
      j += i;
    }
    if (cnt > 0) {
      len++;
    }
    answer = Math.min(answer, len);
  }

  return answer;
};

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
