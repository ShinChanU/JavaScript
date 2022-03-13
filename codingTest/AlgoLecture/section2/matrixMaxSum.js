const solution = (a, b, c, d, e) => {
  let answer = Number.MIN_SAFE_INTEGER;
  const matrix = [a, b, c, d, e];

  // let rowMax=columnMax=0;
  // let rowMax = 0; // 행
  // let columnMax = 0; // 열
  let row = 0; // 행
  let col = 0; // 열
  let dia1 = 0; // 대각
  let dia2 = 0; // 대각
  for (let i = 0; i < matrix.length; i++) {
    row = col = 0;
    for (let j = 0; j < matrix.length; j++) {
      row += matrix[i][j]; // 행
      col += matrix[j][i]; // 열
    }
    answer = Math.max(answer, row, col);
  }
  for (let i = 0; i < matrix.length; i++) {
    dia1 += matrix[i][i];
    dia2 += matrix[i][matrix.length - i - 1];
  }
  answer = Math.max(answer, dia1, dia2);
  return answer;
};

const a = [10, 13, 10, 12, 15];
const b = [12, 39, 30, 23, 11];
const c = [11, 25, 50, 53, 15];
const d = [19, 27, 29, 37, 27];
const e = [19, 13, 30, 13, 19];

console.log(solution(a, b, c, d, e));

// 0312

// 0313 수정
// answer을 최소값으로 만들어두 첫 for문시 열, 행 비교해서 가장 큰값을 answer로 하면됨
// 대각은 따로
