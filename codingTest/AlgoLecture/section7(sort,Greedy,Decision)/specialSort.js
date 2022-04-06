const solution = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < 0 && arr[j + 1] < 0) continue;
      if (arr[j + 1] < 0) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));

// 버블정렬 응용, 음수를 만나면 그자리와 교체하고 break, 음수면 끝
// 0406 study

const solution2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

console.log(solution2([1, 2, 3, -3, -2, 5, 6, -6]));

// 0406 lecture
