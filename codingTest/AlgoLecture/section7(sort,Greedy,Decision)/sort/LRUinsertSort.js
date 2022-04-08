// Least Recently Used
const solution = (size, arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let idx = result.indexOf(arr[i]);
    if (idx !== -1)
      for (let j = idx; j > 0; j--)
        [result[j], result[j - 1]] = [result[j - 1], result[j]];
    else {
      result.unshift(arr[i]);
      if (result.length > size) result.pop();
    }
  }

  return result;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));

// 0407 study

const solution2 = (size, arr) => {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((e) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (e === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) answer[i] = answer[i - 1];
    } else for (let i = pos; i >= 1; i--) answer[i] = answer[i - 1];
    answer[0] = e;
  });

  return answer;
};

console.log(solution2(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));

// 0408
// lecture
