class Node {
  constructor(index, prev, data, next) {
    this.index = index;
    this.prev = prev;
    this.next = next;
    this.data = data;
  }
}

let prevNode = new Node(0);

for (let i = 1; i < 5; i++) {
  let nowNode = new Node(i, prevNode, i);
  prevNode.next = nowNode;
  prevNode = nowNode;
}

console.log(prevNode);

const insertNode = (data) => {
  // 현재 prevNode 앞에 삽입 test
  const newNode = new Node(prevNode.index, prevNode.prev, data, prevNode);

  console.log(newNode);
  // const prev = prevNode.prev;
  // if(prev) {
  //   d
  // }
  // const next = prevNode.prev;
};

insertNode("insert");
