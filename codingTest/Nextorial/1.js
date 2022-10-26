const solution = (samD, kellyD, diff) => {
  let answer = 1;
  if (samD >= kellyD) return -1;
  let sam = samD + diff;
  let kelly = kellyD;
  while (sam >= kelly) {
    sam += samD;
    kelly += kellyD;
    answer++;
  }

  return answer;
};

console.log(solution(3, 5, 1));
console.log(solution(4, 5, 1));

// coding Friends
