'use strict';

// const solution = (board, moves) => {
//   const arr = []; // 숫자들이 담기는 배열
//   let result = 0;
//   let prev = 0;
//   let curr = 0;

//   for (let i = 0; i < moves.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if (board[j][moves[i] - 1] !== 0) {
//         if (arr[0] === 0) prev = 0;
//         prev = arr[arr.length - 1];
//         curr = board[j][moves[i] - 1];
//         if (prev === curr) {
//           arr.pop();
//           result += 2;
//         } else {
//           arr.push(curr);
//         }
//         board[j][moves[i] - 1] = 0;
//         break;
//       }
//     }
//   }

//   return result;
// };

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1]
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );

// [4, 3, 1, 1, 3, 2, 4]

{
  const transpose = matrix =>
    matrix.reduce(
      (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
      []
    );

  const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
      row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
      const pop = stacks[move - 1].pop();
      if (!pop) continue;
      if (pop === basket[basket.length - 1]) {
        basket.pop();
        result += 2;
        continue;
      }
      basket.push(pop);
    }

    return result;
  };

  console.log(
    solution(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
  );
}

// for in, of 정리, reduce 정리
// https://programmers.co.kr/learn/courses/30/lessons/64061/solution_groups?language=javascript