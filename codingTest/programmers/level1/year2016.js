'use strict';

const solution = (a, b) => {
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const dayNums = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 16년 1월 1일은 금요일

  const dayNumsLen = dayNums.length;
  let hap = 0;

  for(let i = 0; i < a-1; i++) {
    hap += dayNums[i];
  }
  hap += b;
  hap = (hap%7-1)  === -1 ? 6 : hap%7-1

  return days[hap];
};

console.log(solution(5, 24));


// another solution
// function getDayName(a,b){
//   var date = new Date(2016, (a - 1), b);
//     return date.toString().slice(0, 3).toUpperCase();
// }