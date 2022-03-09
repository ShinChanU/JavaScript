const solution = (arr) => {
  return Math.min(...arr);
  // return Math.min.apply(null, arr);
};

// const solution = (arr) => {
//   let min = arr[0];
//   // let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }

//   return min;
// };

console.log(solution([5, 3, 7, 11, 2, 15, 17]));

// 220308
