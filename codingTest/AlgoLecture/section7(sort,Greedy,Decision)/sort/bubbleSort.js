const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));

// 0406 study

const solution2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
    console.log(arr);
  }
  return arr;
};

console.log(solution2([23, 25, 11, 7, 2, 1]));

// 0406 lecture
