'use strict';

// a, b 사이의 모든 정수 합
const solution = (a, b) => {
  const reducer = (prev, curr) => prev + curr;
  const arr = [];

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  } // a <= b 유지

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr.reduce(reducer);
};

console.log(solution(5, 3));

// velog 에 문제와, reduce 정리(Math.min, max, abs 도)