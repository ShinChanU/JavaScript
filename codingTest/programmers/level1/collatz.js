// 콜라츠의 추측
// 짝수면 2로 나누셈
// 홀수면 3으로 나누고 1을 더하셈

const solution = (num) => {
  let count = 0;
  while(num !== 1) {
    num = num%2 === 0 ? num/2 : num*3 + 1;
    count++;
    if(count === 500) {
      count = -1;
      break;
    }
  }

  return count;
};

console.log(solution(6));

// 0214 done;