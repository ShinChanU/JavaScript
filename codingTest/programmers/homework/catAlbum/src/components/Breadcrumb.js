function Breadcrumb({ $app, initialState = [], onClick }) {
  // 디렉토리 순서를 보여주는 컴포넌트
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("nav");
  this.$target.className = "Breadcrumb";
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<div class="nav-item">root</div>${this.state
      .map(
        (node, i) =>
          `<div class="nav-item" data-index="${i}">${node.name}</div>`
      )
      .join("")}`;
  };

  this.$target.addEventListener("click", (e) => {
    const $navItem = e.target.closest(".nav-item");

    if ($navItem) {
      const { index } = $navItem.dataset;
      console.log(index);
      this.onClick(index ? parseInt(index, 10) : null);
    }
  });
  this.render();
}

export default Breadcrumb;
