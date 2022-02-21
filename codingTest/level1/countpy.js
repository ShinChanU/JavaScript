const solution = (s) => {
  let countP = 0,
    countY = 0;
  s.toUpperCase()
    .split("")
    .map((e) => {
      e === "P" ? countP++ : "";
      e === "Y" ? countY++ : "";
    });
  return countP === countY;
};

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));

// 0221 done.
