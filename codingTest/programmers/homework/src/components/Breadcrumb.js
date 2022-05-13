function Breadcrumb({ $app, initialState }) {
  // 디렉토리 순서를 보여주는 컴포넌트
  this.state = initialState;

  this.$target = document.createElement("nav");
  this.$target.className = "Breadcrumb";
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    // this.$target.innerHTML = `<div>root</div>${this.state.depth
    //   .map((node, i) => `<div data-index="${index}">${node.name}</div>`)
    //   .join("")}`;
  };

  this.render();
}

export default Breadcrumb;
