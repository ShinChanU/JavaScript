const solution = (a) => {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    let rank = 1;
    for (let j = 0; j < a.length; j++) {
      if (a[i] < a[j]) rank++;
    }
    result.push(rank);
  }

  return result;
};

console.log(solution([87, 89, 92, 100, 76]));

// 0312

const solution2 = (a) => {
  let n = a.length;
  return Array.from({ length: n }, () => 1);
  // return Array(n).fill(1);
};

console.log(solution2([87, 89, 92, 100, 76]));
