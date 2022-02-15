// n이 x의 제곱인지 아닌지
const solution = (n) => {
  const temp = Math.sqrt(n);
  if(temp%1 === 0) {
    return Math.pow(temp+1, 2); // **2 로 제곱 표현 가능
  }
  return -1;
};

console.log(solution(121));

// Math.sqrt(num) : 제곱근 구하기
// Math.pow(num1, num2) : 거듭제곱 구하기(num1을 num2만큼 거듭제곱)
// 0216 done.