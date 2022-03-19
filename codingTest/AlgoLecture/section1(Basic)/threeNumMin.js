function solution(a, b, c) {
  // return Math.min(...[a, b, c]);

  const arr = [a, b, c];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    min = min <= arr[i] ? min : arr[i];
  }
  return min;
}
console.log(solution(6, 5, 1));

// 220308
