const solution = (str) => {
  let answer = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer.push(str[i]);
      if (count !== 1) answer.push(count);
      count = 1;
    }
  }
  return answer.join("");
};

console.log(solution("KKHSSSSSSSE")); // K2HS7E

// 0315
