function solution(a, b, c) {
  // a + b > c
  let max = a;
  let arr = [];
  if (a < b) {
    max = b;
    arr.push(a);
  } else {
    arr.push(b);
  }
  if (max < c) {
    max = c;
    arr.push(max);
  } else {
    arr.push(c);
  }

  return arr[0] + arr[1] > max ? "YES" : "NO";
}
console.log(solution(13, 33, 17));
// sum을 구하면 편함(a + b + c )
// sum - max 하면 array 사용할 필요 X

// 220308
