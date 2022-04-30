const solution = (n, k, cmd) => {
  let answer = "";
  let tmp = 1;
  let table = Array.from({ length: n }, () => tmp++);
  let cpTable = table.slice();
  let delArr = [];
  let selIdx = k;

  console.log(table);

  for (let x of cmd) {
    let cmdArr = x.split(" ");
    let key = cmdArr[0];
    if (key === "U") {
      // up
      let n = Number(cmdArr[1]);
      selIdx -= n;
    } else if (key === "D") {
      // under
      let n = Number(cmdArr[1]);
      selIdx += n;
    } else if (key === "C") {
      // delete
      let [tmp] = cpTable.splice(selIdx, 1);
      delArr.push([selIdx, tmp]);
      if (selIdx === cpTable.length) selIdx--;
    } else {
      // "Z", cancel
      let reData = delArr.pop();
      cpTable.splice(reData[0], 0, reData[1]);
      if (reData[0] < selIdx) selIdx++;
    }
  }

  console.log(table, cpTable);

  let p1 = 0;
  let p2 = 0;

  while (p1 < n) {
    if (table[p1] === cpTable[p2]) {
      p1++;
      p2++;
      answer += "O";
    } else {
      answer += "X";
      p1++;
    }
  }

  return answer;
};

// console.log(
//   solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
// ); // "OOOOXOOO"

// console.log(
//   solution(8, 2, [
//     "D 2",
//     "C",
//     "U 3",
//     "C",
//     "D 4",
//     "C",
//     "U 2",
//     "Z",
//     "Z",
//     "U 1",
//     "C",
//   ])
// ); // "OOXOXOOO"
// 0430 내풀이, fail

// 연결 리스트 사용하라고함
const solution2 = (n, k, cmd) => {
  let answer;

  class Node {
    constructor(index, prev) {
      this.index = index;
      this.prev = prev;
      this.next = null;
    }
  }

  let prevNode = new Node(0);
  let select;

  for (let i = 1; i < n; i++) {
    // 연결리스트 생성
    const cntNode = new Node(i, prevNode);
    prevNode.next = cntNode;
    prevNode = cntNode;

    if (i === k) {
      select = cntNode;
    }
  }

  let trashBin = [];

  const moveSelectedNode = (count, direction) => {
    for (let i = 0; i < count; i++) {
      if (!select[direction]) break;
      select = select[direction];
    }
  };

  const deleteSelectNode = () => {
    const prev = select.prev;
    const next = select.next;

    trashBin.push(select);
    select = next ? next : prev;

    if (prev) prev.next = next;
    if (next) next.prev = prev;
  };

  const restoreNode = () => {
    let trashNode = trashBin.pop();

    const prev = trashNode.prev;
    const next = trashNode.next;

    if (prev) prev.next = trashNode;
    if (next) next.prev = trashNode;
  };

  cmd.forEach((e) => {
    switch (e[0]) {
      case "U":
        moveSelectedNode(e[2], "prev");
        break;
      case "D":
        moveSelectedNode(e[2], "next");
        break;
      case "C":
        deleteSelectNode();
        break;
      case "Z":
        restoreNode();
        break;
    }
  });

  answer = Array.from({ length: n }, () => "0");
  trashBin.map((e) => {
    answer[e.index] = "X";
  });

  return answer.join("");
};

console.log(
  solution2(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
); // "OOOOXOOO"
// 0501 복습 필요, 연결리스트
