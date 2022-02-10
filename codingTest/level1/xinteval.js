const solution = (x, n) => {
  const arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(x*i);
  }
  return arr;
};

console.log(solution(-4, 2));

// 0210 done