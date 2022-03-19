const solution = (k, arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (j === i || j === k || i === k) continue;
        else result.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  const answer = [...new Set(result)].sort((a, b) => a - b).reverse();

  return answer[k - 1];
};

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

// 0318 done
