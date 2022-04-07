const solution = (arr) => {
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      answer[0] = arr[i];
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) answer[1] = arr[i];
  }

  return answer;
};

const arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const arr2 = [120, 130, 150, 150, 130, 150];

console.log(solution(arr1));
console.log(solution(arr2));

// 0407 doing
