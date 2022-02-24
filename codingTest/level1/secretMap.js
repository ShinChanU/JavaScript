// 카카오 블라인드 채용 2018
const binary = (num, n) => {
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

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
// console.log(binary(20));

// 0224 done.
// 또 정규표현식....... 공부하자..
