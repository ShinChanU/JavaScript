const solution = (arr) => {
  const hap = arr.reduce((a, b) => a + b);
  const remain = hap - 100;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === remain - arr[i]) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        break;
      }
    }
  }
  return arr;
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// 220309
