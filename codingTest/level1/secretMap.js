// 카카오 블라인드 채용 2018
/*
  function solution(n, arr1, arr2) {
      return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
  }
*/

const binary = (num, n) => {
  // 이진법 변환, 실상은 toString(2)
  let result = [];

  let i = 0;
  while (i < n) {
    result.push(num % 2);
    num -= num % 2;
    num = num / 2;
    i++;
  }

  return result.reverse().join("");
};

const solution = (n, arr1, arr2) => {
  let arr1Binary = [];
  let arr2Binary = [];
  let result = [];

  arr1.map((e) => {
    arr1Binary.push(binary(e, n));
  });

  arr2.map((e) => {
    arr2Binary.push(binary(e, n));
  });

  for (let i = 0; i < n; i++) {
    // replace(regex로 해결가능)
    let subResult = [];
    for (let j = 0; j < n; j++) {
      if (arr1Binary[i][j] + arr2Binary[i][j] === "00") {
        subResult.push(" ");
      } else {
        subResult.push("#");
      }
    }
    result.push(subResult.join(""));
  }

  return result;
};

const addZero = (n) => {
  return "ab".repeat(n / 4);
};

const solution2 = (n, arr1, arr2) => {
  arr1.map((e, index) => addZero(n, e | arr2[index]));
};

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

// console.log(binary(20));
// console.log(solution(n, arr1, arr2));
// console.log(addZero(5);
const test = 5;
// console.log(test.toString(2));
console.log("11011".replace(/1|0/g, (e) => (+e ? "#" : " ")));
console.log(Boolean("1"));

// 0224 done.
// 또 정규표현식....... 공부하자..

//0225
// toString(radix) : radix는 기수,
// ex. toString(2) => 이진법으로

/*
  function solution(n, arr1, arr2) {
      return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
  }
*/

// 위는 좋은 코드
// v | arr2[i] : 비트 or 연산
// toString(2) : 이진법
// .replace(regex, func) : 정규식에 해당하는 부분을 함수에 따라 대체함
// e => +e ? "#": " " : e는 원래 문자열, +e로 숫자로 변경해서 1인지 판별

// 정규식 공부
// https://github.com/dream-ellie/regex
// https://regexr.com/5mhou
