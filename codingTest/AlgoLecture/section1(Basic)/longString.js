const solution = (n, arr) => {
  let result = arr[0];
  for (let x of arr) {
    if (result.length < x.length) result = x;
  }
  return result;
};

console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));

// 220310
