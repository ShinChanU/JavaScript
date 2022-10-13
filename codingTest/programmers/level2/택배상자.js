const solution = (order) => {
  let result = 0;
  let mainConQueue = [];
  let subConStack = [];
  let n = order.length;

  for (let i = n; i >= 1; i--) mainConQueue.push(i);
  let flag = 0;

  // order를 기반으로 탐색
  for (let i = 0; i < n; i++) {
    if (flag) break;

    let e = order[i];
    let mainN = mainConQueue.length - 1;
    let subN = subConStack.length - 1;

    // 바로 메인 컨테이너에서 찾을때
    if (e === mainConQueue[mainN]) {
      mainConQueue.pop();
      result++;
    }

    // 메인 컨테이너 있는 걸 확인 후 찾을 때 까지 보조 컨테이너에 삽입
    else if (mainConQueue.includes(e)) {
      for (let j = mainN; j >= 0; j--) {
        if (e === mainConQueue[j]) {
          mainConQueue.pop();
          result++;
          break;
        } else {
          subConStack.push(mainConQueue.pop());
        }
      }
    }

    // 보조 컨테이너 젤 위에 있을 때
    else if (subConStack[subN] === e) {
      subConStack.pop();
      result++;
    }

    // 모든 것에 해당하지 않아 더이상 싣지 않을 때
    else {
      flag = 1;
    }
  }

  return result;
};

const order1 = [4, 3, 1, 2, 5]; // 2
const order2 = [5, 4, 3, 2, 1]; // 5

// console.log(solution(order1));
// console.log(solution(order2));
// 브루트포스 6/10 실패

// 객체로 풀어볼까

const solution2 = (order) => {
  let result = 0;
  let mainConQueue = [];
  let subConStack = [];
  let n = order.length;

  let statusObj = {};

  for (let i = n; i >= 1; i--) statusObj[i] = "main";
  let flag = 0;

  // order를 기반으로 탐색
  for (let i = 0; i < n; i++) {
    if (flag) break;

    let e = order[i];
    let mainN = mainConQueue.length - 1;
    let subN = subConStack.length - 1;

    // 바로 메인 컨테이너에서 찾을때
    if (e === mainConQueue[mainN]) {
      mainConQueue.pop();
      result++;
    }

    // 메인 컨테이너 있는 걸 확인 후 찾을 때 까지 보조 컨테이너에 삽입
    else if (mainConQueue.includes(e)) {
      for (let j = mainN; j >= 0; j--) {
        if (e === mainConQueue[j]) {
          mainConQueue.pop();
          result++;
          break;
        } else {
          subConStack.push(mainConQueue.pop());
        }
      }
    }

    // 보조 컨테이너 젤 위에 있을 때
    else if (subConStack[subN] === e) {
      subConStack.pop();
      result++;
    }

    // 모든 것에 해당하지 않아 더이상 싣지 않을 때
    else {
      flag = 1;
    }
  }

  return result;
};

console.log(solution2(order1));
console.log(solution2(order2));
