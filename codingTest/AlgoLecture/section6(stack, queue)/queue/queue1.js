const solution = (n, k) => {
  let answer;
  let arr = [];
  let pos = 0;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  while (arr.length > 1) {
    pos = (pos + k - 1) % n;
    arr.splice(pos, 1);
    n--;
  }

  [answer] = arr;

  return answer;
};

console.log(solution(8, 3));

// 0405 study.

const solution2 = (n, k) => {
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) queue.push(queue.shift());
    queue.shift();
  }

  return queue[0];
};

console.log(solution2(8, 3));

// 0405 lecture.
