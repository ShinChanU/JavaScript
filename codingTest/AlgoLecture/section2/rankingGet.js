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
