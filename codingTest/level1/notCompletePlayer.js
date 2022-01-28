'use strict';

// const solution = (participant, completion) => {
//   completion.map(e => {
//     participant.splice(participant.indexOf(e), 1);
//   })

//   return participant.toString();
// };

// fail, for 2회(map, indexOf)

const solution = (participant, completion) => {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
};
// success, for 1회
// for in 사용 자제, for나 forEach
// arr.length 도 변수로 뺀수 사용시 더 좋음


const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));