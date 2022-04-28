const solution = (priorities, loc) => {
  let answer;
  let queue = [];

  for (let i = 0; i < priorities.length; i++) {
    priorities[i] = [priorities[i], i];
  }

  while (priorities.length > 0) {
    let x = priorities.shift();
    let flag = 1;
    for (let i = 0; i < priorities.length; i++) {
      if (x[0] < priorities[i][0]) {
        flag = 0;
        break;
      }
    }
    if (flag) {
      queue.push(x[1]);
    } else {
      priorities.push(x);
    }
  }

  answer = queue.indexOf(loc) + 1;

  return answer;
};

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 10, 1, 1], 0)); // 5
// 0428 pass.
