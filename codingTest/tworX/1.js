const solution = (arr) => {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    let idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
      answer[i]++;
      answer[idx]++;
    }
  }

  return answer;
};

// console.log(solution([2, 5, 3, 1, 4]));
// console.log(solution([2, 3, 4, 5, 6, 1]));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
