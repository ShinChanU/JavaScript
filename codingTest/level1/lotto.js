function solution(lottos, win_nums) {
  let temp = [];
  let i = 0;
  let count = 0;
  let rank = 0;
  let arr = [];
  let answer = [];
  let high, low;

  while (i < lottos.length) {
    arr = win_nums.find((e) => e === lottos[i]);
    if (arr !== undefined)
      temp.push(arr);
    else if (lottos[i] === 0)
      count++;
    i++;
  }

  switch (temp.length) {
    case 6:
      rank = 1;
      break;
    case 5:
      rank = 2;
      break;
    case 4:
      rank = 3;
      break;
    case 3:
      rank = 4;
      break;
    case 2:
      rank = 5;
      break;
    case 1:
      rank = 6;
      break;
    case 0:
      rank = 7;
      break;
  }

  low = rank; // 최저 순위
  if (rank >= 6)
    low = 6;

  high = rank - count; // 최고 순위
  if (high < 1)
    high = 1;
  else if (high === 7)
    high = 6;
  answer = [high, low];

  return answer;
};

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

// https://programmers.co.kr/learn/courses/30/lessons/77484
// 220105