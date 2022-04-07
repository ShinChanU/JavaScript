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
