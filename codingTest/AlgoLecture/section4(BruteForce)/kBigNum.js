const solution = (k, arr) => {
  let tmp = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        tmp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  console.log(tmp);
  let answer = [...tmp].sort((a, b) => b - a); //  내림차순 정렬
  return answer[k - 1];
};

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

// 0318 done
