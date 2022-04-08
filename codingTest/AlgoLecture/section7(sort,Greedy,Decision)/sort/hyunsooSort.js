const solution = (arr) => {
  let answer = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
      answer.push(i + 1);
      break;
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] <= arr[i - 1] && arr[i] <= arr[i + 1]) {
      answer.push(i + 1);
      break;
    }
  }

  return answer;
};

const arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const arr2 = [120, 130, 150, 150, 130, 150];

console.log(solution(arr1));
console.log(solution(arr2));

// 0408 study

const solution2 = (arr) => {
  // 정렬하면 편리
  let answer = [];
  let clone = [...arr];
  clone.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== clone[i]) answer.push(i + 1);

  return answer;
};

console.log(solution2(arr1));
console.log(solution2(arr2));

// lecture
