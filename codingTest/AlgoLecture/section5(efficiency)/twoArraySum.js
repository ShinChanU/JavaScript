const solution = (arr) => {
  const answer = [...arr[0], ...arr[1]];

  return answer.sort((a, b) => a - b);
};

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];

console.log(solution([a, b]));

// 0319 done.. 효율성..?
