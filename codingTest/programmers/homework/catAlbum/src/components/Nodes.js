function Nodes({ $app, initialState, onClick, onBackClick }) {
  // 렌더링할 데이터 컴포넌트
  this.state = initialState;
  this.onClick = onClick;
  this.onBackClick = onBackClick;

  // Nodes 컴포넌트를 렌더링할 DOM 생성(ul 태그)
  this.$target = document.createElement("div");
  this.$target.className = "Nodes";
  $app.append(this.$target);

  // state 변경하고 재렌더링 함수
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.nodes) {
      // <div Nodes><img path><div>name</div></div>
      const nodeTemplate = this.state.nodes
        .map((node) => {
          const nodePath =
            node.type === "DIRECTORY"
              ? "./assets/directory.png"
              : "./assets/file.png";

          return `
            <div class="Node" data-node-id=${node.id}>
              <img src=${nodePath} />
              <div>${node.name}</div>
            </div>
          `;
        })
        .join("");

      this.$target.innerHTML = !this.state.isRoot
        ? `<div class="Node">
      <img src="./assets/prev.png">
      </div>${nodeTemplate}`
        : nodeTemplate;
    }
  };

  this.render();

  this.$target.addEventListener("click", (e) => {
    const $node = e.target.closest(".Node");

    if ($node) {
      const { nodeId } = $node.dataset;
      if (!nodeId) {
        this.onBackClick();
        return;
      }
      let selectNode = this.state.nodes.find((node) => node.id === nodeId); // 선택된 노드를 찾는 과정
      if (selectNode) {
        this.onClick(selectNode); // node를 넘경줄수있음..
      }
    }
  });
}

export default Nodes;
