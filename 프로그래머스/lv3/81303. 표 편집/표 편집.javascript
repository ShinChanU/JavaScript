const solution = (n, k, cmd) => {
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
    let tmp = e.split(" ")
    switch (tmp[0]) {
      case "U":
        moveSelectedNode(tmp[1], "prev");
        break;
      case "D":
        moveSelectedNode(tmp[1], "next");
        break;
      case "C":
        deleteSelectNode();
        break;
      case "Z":
        restoreNode();
        break;
    }
  });

  answer = Array.from({ length: n }, () => "O");
  trashBin.map((e) => {
    answer[e.index] = "X";
  });

  return answer.join("");
};