const solution = (n) => {
  // let result = n / 12;
  // let mod = result % 1;
  // if (mod > 0) result = result - mod + 1;
  // else {
  //   result = result - mod;
  // }
  // return result;
  return Math.ceil(n / 12);
};

console.log(solution(24)); // 3
console.log(solution(178)); // 15

// 220308
