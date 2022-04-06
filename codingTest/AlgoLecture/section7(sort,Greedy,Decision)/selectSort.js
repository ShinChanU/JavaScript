const solution = (a) => {
  let tmp;

  for (let i = 0; i < a.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < a.length; j++) {
      if (min > a[j]) min = a[j];
    }
    tmp = a[i];
    a[a.indexOf(min)] = tmp; // ?
    a[i] = min;
  }

  return a;
};

console.log(solution([13, 5, 11, 7, 23, 15]));

// 0406 study

const solution2 = (a) => {
  // index를 가지고 탐색
  let tmp;

  for (let i = 0; i < a.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[idx] > a[j]) idx = j;
    }
    [a[i], a[idx]] = [a[idx], a[i]]; // swap 하는 법
  }

  return a;
};

console.log(solution2([13, 5, 11, 7, 23, 15]));

// 0406 lecture
