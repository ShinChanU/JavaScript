const solution = (a, b, c, d, e) => {
  const matrix = [a, b, c, d, e];

  let rowMax = 0; // 행
  let columnMax = 0; // 열
  let dia1 = 0; // 대각1
  let dia2 = 0; // 대각2
  for (let i = 0; i < matrix.length; i++) {
    let row = 0;
    let col = 0;
    for (let j = 0; j < matrix.length; j++) {
      row += matrix[i][j]; // 행
      col += matrix[j][i]; // 열
      if (i === j) dia1 += matrix[i][j]; // 대각1
      if (i + j === matrix.length - 1) dia2 += matrix[i][j]; // 대각2
    }
    if (rowMax < row) rowMax = row; // 행합중 max
    if (columnMax < col) columnMax = col; //열합중 max
  }

  return Math.max(rowMax, columnMax, dia1, dia2);
};

const a = [10, 13, 10, 12, 15];
const b = [12, 39, 30, 23, 11];
const c = [11, 25, 50, 53, 15];
const d = [19, 27, 29, 37, 27];
const e = [19, 13, 30, 13, 19];

console.log(solution(a, b, c, d, e));

// 0312
