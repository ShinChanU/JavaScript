// BFS 문제 풀이
const solution = (maps) => {
  let n = maps.length - 1;
  let m = maps[0].length - 1;
  let answer = 10000;
  const queue = [];

  // 12 3 6 9
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  maps[0][0] = 0;
  queue.push([0, 0, 1]);

  while (queue.length) {
    let [x, y, dis] = queue.shift();
    if (x === n && y === m && answer > dis) answer = dis;

    for (let k = 0; k < 4; k++) {
      let kx = x + dx[k];
      let ky = y + dy[k];
      if (kx >= 0 && kx <= n && ky >= 0 && ky <= m && maps[kx][ky]) {
        maps[kx][ky] = 0;
        queue.push([kx, ky, dis + 1]);
      }
    }
  }

  return answer === 10000 ? -1 : answer;
};