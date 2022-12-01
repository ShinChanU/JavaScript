// const solution = (pn) => {
//   let answer = 0;
//   let arr = pn.split("-");
//   let firstNumber = arr[0];
//   let regex = /[0-9]/g;
//   console.log(arr);

//   // +82 로 시작(3)
//   if (firstNumber === "+82") {
//     // 유형 3
//     if (arr.length === 4 && arr[1] === "10") {
//       if (
//         regex.test(arr[2]) &&
//         arr[2].length === 4 &&
//         regex.test(arr[3]) &&
//         arr[3].length === 4
//       )
//         answer = 3;
//       else answer = -1;
//     } else answer = -1;
//   }
//   // 010 으로 시작(1, 2)
//   else if (firstNumber === "010") {
//     if (arr.join("").includes("+")) return -1;
//     // 유형 1
//     console.log(/[0-9]/g.test("++1"));
//     if (
//       arr.length === 3 &&
//       regex.test(arr[1]) &&
//       arr[1].length === 4 &&
//       regex.test(arr[2]) &&
//       arr[2].length === 4
//     )
//       answer = 1;
//     else answer = -1;
//   }
//   // 유형 2
//   else if (
//     arr.length === 1 &&
//     firstNumber.slice(0, 3) === "010" &&
//     arr[0].length === 11 &&
//     regex.test(arr[0])
//   ) {
//     if (arr.join("").includes("+")) return -1;
//     answer = 2;
//   } else answer = -1;

//   return answer;
// };

const solution = (pn) => {
  let answer = -1;
  let arr = pn.split("-");
  let firstNumber = arr[0];
  let regex = /[0-9]/g;
  console.log(arr);

  // +82 로 시작(3)
  if (firstNumber === "+82") {
    // 유형 3
    if (arr.length === 4 && arr[1] === "10") {
      if (
        regex.test(arr[2]) &&
        arr[2].length === 4 &&
        regex.test(arr[3]) &&
        arr[3].length === 4 &&
        !(arr[2] + arr[3]).includes("+")
      )
        answer = 3;
    }
  }

  // 010 으로 시작(1, 2)
  else if (firstNumber === "010") {
    if (arr.join("").includes("+")) return -1;
    // 유형 1
    console.log(/[0-9]/g.test("++1"));
    if (
      arr.length === 3 &&
      regex.test(arr[1]) &&
      arr[1].length === 4 &&
      regex.test(arr[2]) &&
      arr[2].length === 4
    )
      answer = 1;
  }
  // 유형 2
  else if (
    arr.length === 1 &&
    firstNumber.slice(0, 3) === "010" &&
    arr[0].length === 11 &&
    regex.test(arr[0])
  ) {
    if (arr.join("").includes("+")) return -1;
    answer = 2;
  }

  return answer;
};

const pN1 = "010-+234-4568";
const pN2 = "01011113333";
const pN3 = "+82-10-3333-2323";
const pN4 = "+82-010-3434-2323";
const pN5 = "+82222-10-3434-2323";

console.log(solution(pN1));
console.log(solution(pN2));
// console.log(solution(pN3));
// console.log(solution(pN4));
// console.log(solution(pN5));
