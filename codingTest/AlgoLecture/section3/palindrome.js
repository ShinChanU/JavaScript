const solution = (str) => {
  let val = str.toUpperCase();
  let n = val.length;
  let tmp = "";

  // 알파벳 아닌 것 제외
  for (let i = 0; i < n; i++) {
    if (val[i].charCodeAt() >= 65 && val[i].charCodeAt() <= 90) tmp += val[i];
  }

  // 앞뒤 같은지 확인
  n = tmp.length;
  let answer = "YES";
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    if (tmp[i] !== tmp[n - i - 1]) answer = "NO";
  }

  return answer;
};

console.log(solution("found7,time;study;Ydutsemit,7Dnuof"));

// 0314
