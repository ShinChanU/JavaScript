const solution = (n) => {
  // return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
  return parseInt(n+"".split('').sort().reverse().join(''));
};

console.log(solution(118372));

// 0216 done.