const solution = (s, t) => {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i - j] === t) {
        answer.push(j);
        break;
      } else if (s[i + j] === t) {
        answer.push(j);
        break;
      }
    }
  }

  return answer;
};

console.log(solution("teachermode", "e"));

// 0314
