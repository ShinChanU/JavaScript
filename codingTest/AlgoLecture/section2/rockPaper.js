const solution = (arrA, arrB) => {
  return arrA.map((e, i) => {
    if (e === arrB[i]) return "D";
    else if (e - arrB[i] === 1) {
      return "A";
    } else if (arrB[i] - e === 1) {
      return "B";
    } else if (e - arrB[i] === 2) {
      return "B";
    } else if (arrB[i] - e === 2) {
      return "A";
    }
  });
};

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

// 0311
