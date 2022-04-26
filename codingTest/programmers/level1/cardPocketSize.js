const solution = (sizes) => {
  const reorder = sizes.map((arr) => arr.sort((a, b) => a - b).reverse());
  let maxW = reorder[0][0],
    maxH = reorder[0][1];

  for (let i = 1; i < reorder.length; i++) {
    maxW = maxW > reorder[i][0] ? maxW : reorder[i][0];
    maxH = maxH > reorder[i][1] ? maxH : reorder[i][1];
  }

  return maxW * maxH;
};

const ex1 = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]; // 4000
const ex2 = [
  [10, 7],
  [12, 3],
  [8, 1],
  [14, 7],
  [5, 15],
]; // 120
const ex3 = [
  [14, 4],
  [19, 6],
  [0, 16],
  [18, 7],
  [7, 11],
]; // 133

// console.log(solution(ex1));
// console.log(solution(ex2));
// console.log(solution(ex3));

// reduce()사용과 [a, b] = [1,2]: a =1, b=2 기법사용, 구조분해 할당
const solutionReduce = (sizes) => {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [
    Math.max(h, Math.max(a, b)),
    Math.max(v, Math.min(a, b)),
  ]);
  return hor * ver;
};

console.log(solutionReduce(ex3));

// 0227 done.
