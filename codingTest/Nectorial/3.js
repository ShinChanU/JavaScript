const solution = (initPlayers, newPlayers, rank) => {
  let answer = 0;
  let n = newPlayers.length;
  let queue = initPlayers.sort((a, b) => b - a).slice(0, rank);

  const compare = (newP) => {
    let fir = queue.length - 1;
    let cnt = 0;
    let lt = 0;
    let rt = queue.length - 1;
    while (lt < rt) {
      let mid = Math.floor(lt + rt / 2);
      if (queue[mid] < newP) {
        rt = mid - 1;
        fir--;
        cnt++;
      } else lt = mid + 1;
      console.log(queue, newP, mid, lt, rt);
    }

    // if (queue[fir] < newP) {
    //   fir--;
    //   cnt++;
    // } else {
    //   if (cnt) {
    //     queue.pop();
    //     queue = [...queue.slice(0, fir + 1), newP, ...queue.slice(fir + 1)];
    //   }
    //   break;
    // }
    // }
  };

  let i = 0;
  answer += queue[queue.length - 1];

  while (i < n) {
    console.log(queue);
    let newPo = newPlayers[i];
    compare(newPo);
    answer += queue[queue.length - 1];
    i++;
  }

  return answer;
};

console.log(solution([1, 1, 3], [2, 2, 4], 2));
console.log(solution([1, 2, 3], [6, 5, 4], 1)); // 3 +  6 + 5 + 4
console.log(
  solution([10, 10, 10, 5, 4, 3, 2, 1, 1, 1], [6, 7, 1, 5, 3, 1, 9, 1, 4, 5], 5)
);
console.log(solution([100, 100, 99, 97], [25, 16, 25, 100, 50], 3)); //
// console.log(
//   solution(
//     [
//       100, 100, 99, 99, 98, 98, 97, 97, 96, 96, 95, 94, 92, 92, 91, 89, 89, 88,
//       86, 85, 85, 84, 84, 83, 82, 82, 80, 80, 80, 80, 79, 78, 78, 77, 76, 74,
//       71, 71, 70, 70, 69, 69, 65, 63, 62, 61, 61, 59, 59, 58, 58, 58, 58, 57,
//       56, 54, 53, 52, 52, 49, 48, 43, 43, 43, 41, 40, 38, 38, 34, 33, 33, 32,
//       32, 29, 29, 27, 26, 26, 26, 25, 24, 24, 24, 24, 21, 19, 19, 18, 15, 13,
//       13, 11, 11, 10, 10, 10, 8, 6, 4, 4,
//     ],
//     [
//       52, 16, 25, 93, 2, 79, 55, 23, 73, 71, 93, 67, 36, 32, 68, 44, 33, 82, 94,
//       37, 41, 62, 49, 75, 86, 2, 76, 25, 13, 7, 33, 31, 84, 50, 45, 26, 54, 82,
//       93, 32, 100, 81, 15, 59, 51, 51, 53, 15, 78, 17, 67, 74, 28, 92, 99, 92,
//       84, 32, 35, 19, 54, 49, 25, 29, 14, 94, 91, 26, 91, 59, 24, 20, 88, 4, 1,
//       77, 81, 52, 14, 80, 41, 47, 86, 45, 86, 40, 68, 45, 32, 67, 82, 63, 19,
//       82, 87, 92, 95, 41, 30, 91,
//     ],
//     43
//   )
// );
