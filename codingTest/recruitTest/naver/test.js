const solution = (arr) => {
  let answer = [];
  let obj = {
    1: 1,
  };
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      let cnt = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) cnt++;
      }
      if (cnt > 1) answer.push(cnt);
      obj[arr[i]] = cnt;
    }
  }

  return answer.length > 0 ? answer : -1;
};

console.log(solution([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));
// 0604 boostCamp 함수구현 test
