const solution = (s) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = s.length;

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    let result = "";
    let cnt = 1;
    let str = s.substr(0, i);
    let j = i;
    result += str;
    while (j < n) {
      let tmp = s.substr(j, i);
      if (tmp.length !== i) {
        result += tmp;
      } else if (str === tmp) {
        cnt++;
      } else {
        if (cnt > 1) {
          result += `${cnt}`;
          result += tmp;
          cnt = 1;
        } else {
          result += tmp;
        }
        str = tmp;
      }
      j += i;
    }
    if (cnt > 1) {
      result += `${cnt}`;
    }

    answer = Math.min(answer, result.length);
  }

  return answer;
};

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
console.log(solution("a"));
// 0506 pass
