const solution2 = (queue1, queue2) => {
  let sum = 0;
  let cnt = 0;

  queue1.map((e, i) => {
    sum += e;
    sum += queue2[i];
  });

  let sum1 = queue1.reduce((a, b) => a + b);
  let sum2 = sum - sum1;

  let i = 1;
  let j = 1;
  while (1) {
    if (sum1 === sum2) break;
    if (sum1 === 0 || sum2 === 0) {
      cnt = -1;
      break;
    }
    let x;
    if (sum1 < sum2) {
      x = queue2[i - 1];
      if (!x) {
        cnt = -1;
        break;
      }
      sum2 -= x;
      queue2[i - 1] = null;
      queue1.push(x);
      sum1 += x;
      cnt++;
      i++;
    } else {
      x = queue1[j - 1];
      if (!x) {
        cnt = -1;
        break;
      }
      sum1 -= x;
      queue1[j - 1] = null;
      queue2.push(x);
      sum2 += x;
      cnt++;
      j++;
    }

    console.log(queue1, queue2);
  }

  return cnt; // 같게 만드는 최소 실행횟수, 못 만들면 -1
};

// const solution = (queue1, queue2) => {
//   let answer;
//   let sum = 0;
//   let cnt = 0;
//   let n = queue1.length;

//   queue1.map((e, i) => {
//     sum += e;
//     sum += queue2[i];
//   });

//   let sum1 = queue1.reduce((a, b) => a + b);
//   let sum2 = sum - sum1;

//   console.log(sum, sum1, sum2);

//   class Node {
//     constructor(index, data, prev) {
//       this.index = index;
//       this.data = data;
//       this.prev = prev;
//       this.next = null;
//     }
//   }

//   let prevNode1 = new Node(0, queue1[0]);
//   let prevNode2 = new Node(0, queue2[0]);
//   let select1 = prevNode1;
//   let select2 = prevNode2;

//   for (let i = 1; i < n; i++) {
//     // 연결리스트 두개 생성
//     const nowNode1 = new Node(i, queue1[i], prevNode1);
//     prevNode1.next = nowNode1;
//     prevNode1 = nowNode1;
//     const nowNode2 = new Node(i, queue2[i], prevNode2);
//     prevNode2.next = nowNode2;
//     prevNode2 = nowNode2;
//     if (i === 1) {
//       select1.next = nowNode1;
//       select2.next = nowNode2;
//     }
//   }

//   // console.log(prevNode1); //  끝
//   // console.log(prevNode2);
//   console.log(select1); //  처음
//   console.log(select2);

//   let i = 0;
//   while (i < 10) {
//     if (sum1 === sum2) break;
//     let x;
//     if (sum1 < sum2) {
//       let newNode = select2.next;
//       x = select2.data;
//       console.log("s1 < s2", x);
//       sum2 -= x;
//       sum1 += x;
//       cnt++;
//       prevNode1.next = select2;
//       select2.prev = prevNode1;
//       select2.next = null;
//       select2 = newNode;
//       console.log(newNode);
//     } else {
//       let newNode = select1.next;
//       x = select1.data;
//       console.log("s1 > s2", x);
//       sum1 -= x;
//       sum2 += x;
//       cnt++;
//       prevNode2.next = select1;
//       select1.prev = prevNode2;
//       select1.next = null;
//       select1 = newNode;
//       console.log(newNode);
//     }
//     console.log(x, sum1, sum2);
//     i++;
//   }

//   console.log(cnt);

//   return answer;
// };

const solution = (queue1, queue2) => {
  let sum = 0;
  let cnt = 0;
  queue1.map((e, i) => {
    sum += e;
    sum += queue2[i];
  });

  let sum1 = queue1.reduce((a, b) => a + b);
  let sum2 = sum - sum1;

  let lt = 0,
    rt = 0;
  while (1) {
    if (rt > queue2.length * 2 || lt > queue1.length * 2) {
      cnt = -1;
      break;
    }
    let ltFlag = parseInt(lt / 4) % 2;
    let rtFlag = parseInt(rt / 4) % 2;
    if (sum1 === 0 || sum2 === 0) {
      cnt = -1;
      break;
    }
    if (sum1 === sum2) break;
    let x;
    if (sum1 > sum2) {
      if (ltFlag) {
        x = queue2[lt % 4];
      } else {
        x = queue1[lt % 4];
      }
      sum1 -= x;
      sum2 += x;
      cnt++;
      lt++;
    } else {
      if (rtFlag) {
        x = queue1[rt % 4];
      } else {
        x = queue2[rt % 4];
      }
      sum2 -= x;
      sum1 += x;
      cnt++;
      rt++;
    }
  }

  return cnt;
};

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
console.log(solution([1, 3, 2], [2, 3, 5]));
console.log(solution([1, 3, 2, 2, 3, 4], [2, 3, 5, 5, 6, 3]));
// 28/30 pass, 2개 실패
