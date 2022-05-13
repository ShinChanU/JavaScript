import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";

function App($app) {
  this.state = {
    isRoot: false,
    nodes: [
      {
        id: "1",
        name: "노란고양이",
        type: "DIRECTORY",
        filePath: null,
        parent: null,
      },
      {
        id: "3",
        name: "까만고양이",
        type: "DIRECTORY",
        filePath: null,
        parent: null,
      },
    ],
    depth: [],
  };

  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
  });

  const nodes = new Nodes({
    $app, // DOM(접근)
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    }, // 초기값
    onClick: (node) => {
      if (node.type === "DIRECTORY") {
        // DIRECTORY 경우 처리, breadcrumb 처리할 예정, Node 컴포넌트에서 모름
        console.log("dir");
      } else if (node.type === "FILE") {
        // FILE 경우 처리
        console.log("file");
      }
    },
  });
}

export default App;

// 0514 doing.
// https://prgms.tistory.com/53
// https://programmers.co.kr/skill_check_assignments/100
