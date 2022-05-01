const solution = (numbers, hand) => {
  let result = "";

  let lt = [3, 0];
  let rt = [3, 2];

  for (let n of numbers) {
    if (n % 3 === 1) {
      result += "L";
      switch (n) {
        case 1:
          lt = [0, 0];
          break;
        case 4:
          lt = [1, 0];
          break;
        case 7:
          lt = [2, 0];
          break;
      }
    } else if (n % 3 === 0 && n !== 0) {
      result += "R";
      switch (n) {
        case 3:
          rt = [0, 2];
          break;
        case 6:
          rt = [1, 2];
          break;
        case 9:
          rt = [2, 2];
          break;
      }
    } else {
      let row, col;
      if (n === 0) {
        [row, col] = [3, 1];
      } else {
        n = n - 1;
        row = parseInt(n / 3);
        col = n % 3;
      }
      let disL = Math.abs(row - lt[0]) + Math.abs(col - lt[1]);
      let disR = Math.abs(row - rt[0]) + Math.abs(col - rt[1]);
      if (disL > disR) {
        rt = [row, col];
        result += "R";
      } else if (disL < disR) {
        lt = [row, col];
        result += "L";
      } else {
        if (hand === "right") {
          result += "R";
          rt = [row, col];
        } else {
          result += "L";
          lt = [row, col];
        }
      }
    }
  }

  return result;
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));

// 0501 40분 소요, pass
