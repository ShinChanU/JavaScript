const solution = (s) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = s.length;

    for (let i = 1; i <= Math.ceil(n / 2); i++) {
    let result = "";
    let cnt = 1;
    let len = 0;
    let str = s.substr(0, i);
    let j = i;
    result += str;
    while (j < n) {
      let tmp = s.substr(j, i);
      if (tmp.length !== i) {
        len += tmp.length;
        result += tmp;
      } else if (str === tmp) {
        cnt++;
      } else {
        // str !== tmp
        if (cnt > 1) {
          len++;
          result += `${cnt}`;
          result += tmp;
          cnt = 1;
        } else {
          result += tmp;
        }
        str = tmp;
        len += i;
      }
      j += i;
    }
    if (cnt > 1) {
      result += `${cnt}`;

      len++;
    }

    answer = Math.min(answer, result.length);
  }

  return answer;
};