const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
};

console.log(solution([11, 7, 5, 6, 10, 9]));

// 0407 study

const solution2 = (arr) => {
  let i = 0;
  let j = 0;

  for (i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (tmp < arr[j]) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }

  return arr;
};

console.log(solution2([11, 7, 5, 6, 10, 9]));

// 0408 lecture
