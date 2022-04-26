// numbers의 요소를 적당히 더하거나 빼서 target으로 만드는데 성공하는 경우의 수

// 재귀함수...
// 단순 for문.. or map...
// x는 그래프 인덱스, hap은 합 경우의 수, result는 결과에 맞는 경우의 수 개수
const recursiveFn = (numbers, target, x, hap, result, numbersLen) => {
  // 전위 순회
  if (x > Math.pow(2, numbersLen + 1) - 1) return result;
  else {
    if (x % 2 === 0) hap += numbers[Math.floor(Math.log2(x) - 1)];
    if (x % 2 === 1 && x != 1) hap -= numbers[Math.floor(Math.log2(x) - 1)];
    if (x > Math.pow(2, numbersLen) && target === hap) result++;
  }

  result = recursiveFn(numbers, target, x * 2, hap, result, numbersLen);
  result = recursiveFn(numbers, target, x * 2 + 1, hap, result, numbersLen);

  return result;
};

// const solution = (numbers, target) => {
//   let hap = 0,
//     result = 0;
//   const numbersLen = numbers.length;
//   return recursiveFn(numbers, target, 1, hap, result, numbersLen);
// };

// console.log(solution([1, 1, 1, 1, 1], 3));
// console.log(solution([4, 1, 2, 1], 4));
// console.log(solution([1, 2, 3, 5], 5));

// function solution(numbers, target) {
//   let answer = 0;
//   getAnswer(0, 0);
//   function getAnswer(x, value) {
//     console.log(x, value, numbers[x]);
//     if (x < numbers.length) {
//       getAnswer(x + 1, value + numbers[x]);
//       getAnswer(x + 1, value - numbers[x]);
//     } else {
//       if (value === target) {
//         answer++;
//       }
//     }
//   }
//   return answer;
// }

// 220303 doing
// 다시 풀고 velog 올리기
// https://data-make.tistory.com/325
// https://programmers.co.kr/questions/17415

const solution = (numbers, target) => {
  let value = 0,
    count = 0,
    x = 0;
  const recursive = (x, value) => {
    if (x === numbers.length && value === target) count++;
    if (x >= numbers.length) return;
    recursive(x + 1, value + numbers[x]);
    recursive(x + 1, value - numbers[x]);
  };

  recursive(x, value);
  return count;
};

console.log(solution([4, 1, 2, 1], 4));
// console.log(solution([1, 1, 1, 1, 1], 3));
