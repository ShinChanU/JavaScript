const solution = (n, str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) result.push(str[i]);
  }
  return result;
};

console.log(solution(5, ["good", "time", "good", "time", "student"]));

// 220310
