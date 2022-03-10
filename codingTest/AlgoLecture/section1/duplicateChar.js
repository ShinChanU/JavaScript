const solution = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) result.push(str[i]);
  }
  return result.join("");
};

console.log(solution("ksekkset"));
