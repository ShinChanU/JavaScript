const solution = (s) => {
  let result = s.length === 4 ? true : false;
  s.split("").map((e) => {
    if (e.charCodeAt() < 48 || e.charCodeAt() > 57) result = false;
  });

  return result;
};

console.log(solution("a234")); // 48 - 57
// 0217 done.
