const solution = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[0].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(temp);
  }

  return result;
};

// const solution = (arr1, arr2) => {
//   let result = [];

//   result = arr1.map((v1, i1) => (
//     v1.map((v2, i2) => (
//       v2 + arr2[i1][i2]
//     ))
//   ));

//   return result;
// };

console.log(solution(
  [[1, 2], [2, 3]],
  [[3, 4], [5, 6]]
));

// 0210 done