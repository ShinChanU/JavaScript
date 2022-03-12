const solution = (arrA, arrB) => {
  return arrA.map((e, i) => {
    if (e === arrB[i]) return "D";
    else if (e - arrB[i] === 1) {
      return "A";
    } else if (arrB[i] - e === 1) {
      return "B";
    } else if (e - arrB[i] === 2) {
      return "B";
    } else if (arrB[i] - e === 2) {
      return "A";
    }
  });
};

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

// 0311

const solution2 = (a, b) => {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D";
    else if (a[i] === 1 && b[i] === 3) answer += "A";
    else if (a[i] === 2 && b[i] === 1) answer += "A";
    else if (a[i] === 3 && b[i] === 2) answer += "A";
    else answer += "B";
  }
  return answer;
};

console.log(solution2([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
