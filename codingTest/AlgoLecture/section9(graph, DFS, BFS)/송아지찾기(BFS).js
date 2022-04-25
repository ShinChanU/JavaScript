const solution = (s, e) => {
  let answer = 0;
  let queue = [];
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0); // 이 배열로 현재 레벨 파악
  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length) {
    let v = queue.shift();
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) return dis[v] + 1;
      if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
        ch[nv] = 1;
        queue.push(nv);
        dis[nv] = dis[v] + 1; // nv의 레벨은 부모노드(v) + 1
      }
    }
  }

  return answer;
};

console.log(solution(5, 14));
console.log(solution(8, 3));
// 0425 lecture, 복습 필요

function solution2(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1;
  queue.push(s);

  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution2(5, 14));
