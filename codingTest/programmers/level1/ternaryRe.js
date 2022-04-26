const solution = (n) => {
  const ternary = n
    .toString(3)
    .split("")
    .map((e) => parseInt(e));

  return parseInt(ternary.reverse().join(""), 3);
  // let acc = 0;
  // ternary.map((e, i) => {
  //   acc += e * 3 ** i;
  // });

  // return acc;
};

console.log(solution(45));
console.log(solution(125));

// parseInt(string, radix); return 값에 대해 radix진법으로 표현된 string
// console.log(parseInt("1010", 2)); => 10

// 220302 done.
