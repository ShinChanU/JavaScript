const solution = (board) => {
  let answer = Number.MAX_SAFE_INTEGER; // 최소 금액, 직선은 100원 코너는 500원
  let n = board.length; // 출발: (0, 0) 도착: (n-1, n-1)
  let dx = [-1, 1, 0, 0]; // 12(r), 6(r), 3(c), 9(r) 방향 탐색
  let dy = [0, 0, 1, -1];
  let cnt = 0;

  // DFS 사용
  const DFS = (x, y, d, c) => {
    // x: row, y: column
    if (x === n - 1 && y === n - 1) {
      let sum = (c - 1) * 500 + d.length * 100;
      console.log(d, c, sum);
      answer = Math.min(answer, sum);
      return;
    } else {
      let tmp;
      let directFlag;
      if (d.length > 0) tmp = d[d.length - 1];
      for (let k = 0; k < dx.length; k++) {
        if (k < 2) directFlag = "row";
        else directFlag = "col";
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
          if (tmp && tmp !== directFlag) {
            c++;
            console.log(tmp, directFlag, c);
          }
          board[nx][ny] = 1;
          DFS(nx, ny, [...d, directFlag], c);
          board[nx][ny] = 0;
        }
      }
    }
  };

  board[0][0] = 1;
  DFS(0, 0, [], cnt); // 출발 좌표

  return answer;
};

const aBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const bBoard = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
];

const cBoard = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
];

const dBoard = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
];

// console.log(
//   solution(aBoard)
// );
// console.log(
//   solution(bBoard)
// );
// console.log(
//   solution(cBoard)
// );
// console.log(
//   solution(dBoard)
// );
// 0502 약 2시간 소요, fail, DFS 사용함, BFS로 풀어봐야할듯

const solution2 = (board) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = board.length;
  let dx = [0, 0, -1, 1]; // 12(r), 6(r), 3(c), 9(c) 방향 탐색(상하좌우)
  let dy = [1, -1, 0, 0];
  let queue = [];
  queue.push([0, 0, 0, 0]); // 초기 x, y값, cost, direction 지정
  const arr = Array.from({ length: n }, () => Array(n).fill(0)); // 이동한 좌표에 소요되는 금액을 담을 배열
  arr[0][0] = 0;

  while (queue.length) {
    let [x, y, cost, dir] = queue.shift();
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (ny < 0 || nx < 0 || ny > n - 1 || nx > n - 1 || board[nx][ny])
        continue; //  board가 1이거나, nx, ny가 범위를 벗어날 경우는 파악X
      let direction; // 방향을 담을 변수
      let charge = 0; // 금액을 담을 변수
      if (k < 2) direction = 10; // 가로
      else direction = 11; // 세로
      if (Math.abs(dir - direction) === 1)
        charge += 600; // 방향이 바뀌면 600원!
      else charge += 100; // 아니면 100원!
      if (arr[nx][ny] === 0 || arr[nx][ny] >= charge + cost) {
        // arr 배열의 현재 위치의 값이 0이거나, 지금 값보다 클 경우 변경
        arr[nx][ny] = cost + charge; // arr 배열에 직전의 cost와 현재의 charge를 더한 값을 저장
        queue.push([nx, ny, cost + charge, direction]); // 변경이 되었으면 다시 queue에 삽입
        console.log([nx, ny, cost + charge, direction]);
      }
    }
  }

  return arr[n - 1][n - 1];
};

// console.log(solution2(aBoard));
// console.log(solution2(bBoard));
// console.log(solution2(cBoard));
// console.log(solution2(dBoard));
console.log(
  solution2([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ])
);
// 0502 96% pass
