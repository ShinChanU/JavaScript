const solution = (left, right) => {
  const between = right - left + 1;
  let result = 0;

  for (let i = 0; i < between; i++) {
    let num = left + i;
    let count = 0;
    count = Math.sqrt(num) % 1 === 0 ? count + 1 : count;

    for (let j = 1; j < Math.sqrt(num); j++) {
      count = num % j === 0 ? count + 2 : count;
    }

    result = count % 2 === 0 ? result + num : result - num;
  }

  return result;
};

console.log(solution(13, 17));
console.log(solution(24, 27));

// 220302 done.
// 약수의 개수가 홀수개이면 제곱근이 정수인것이다..
// Number.isInteger()로 정수인지 boolean 판별 가능
