const solution = (num) => {
  let result;
  let n = num.length;
  let selN = n / 2;
  let set = new Set();

  num.forEach((e) => {
    if (!set.has(e)) set.add(e);
  });

  if (set.size < selN) result = set.size;
  else result = selN;

  return result;
};

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
// 0611
// 자료구조 set
