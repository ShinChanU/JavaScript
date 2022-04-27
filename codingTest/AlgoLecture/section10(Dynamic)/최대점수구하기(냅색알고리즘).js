const solution = (m, arr) => {
  let answer;
  let dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i][1]; j <= m; j++) {
      if()
      dy[j] = arr[i][0];
      if()
      console.log(dy);
    }
  }

  console.log(dy);

  return answer;
};

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);

// doing 0427 
