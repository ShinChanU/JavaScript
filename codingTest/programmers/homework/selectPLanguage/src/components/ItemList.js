function ItemList({ $app, initialState, onSelect }) {
  this.state = {
    items: initialState.recommendLan,
    selectIndex: 0,
  };
  this.$target = document.createElement("div");
  this.$target.className = "Suggestion";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { items = [] } = this.state;
    console.log(items);
    if (this.state.items.length) {
      this.$target.style.display = "block";
      this.$target.innerHTML = `
      <ul>
        ${this.state.items
          .map(
            (e, i) =>
              `<li class="${
                this.state.selectIndex === i ? "Suggestion__item--selected" : ""
              }" data-index=${i}>${e}</li>`
          )
          .join("")}
      </ul>
    `;
    } else {
      this.$target.style.display = "none";
      this.$target.innerHTML = ``;
    }
  };

  window.addEventListener("keyup", (e) => {
    // e.preventDefault();
    if (this.state.items.length > 0) {
      const { selectIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      const navigationKeys = ["ArrowUp", "ArrowDown"];
      let nextIndex = selectIndex;

      if (navigationKeys.includes(e.key)) {
        if (e.key === "ArrowUp")
          nextIndex = selectIndex === 0 ? lastIndex : nextIndex - 1;
        else if (e.key === "ArrowDown")
          nextIndex = selectIndex === lastIndex ? 0 : nextIndex + 1;
      } else if (e.key === "Enter") {
        onSelect(this.state.items[this.state.selectIndex]);
      }

      this.setState({
        ...this.state,
        selectIndex: nextIndex,
      });
    }
  });

  this.$target.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    if ($li) {
      const { index } = $li.dataset;
      try {
        onSelect(this.state.items[Number(index)]);
      } catch (e) {
        alert("무언가 잘못됨,. 선택못함");
        console.log(e);
      }
    }
  });

  this.render();
}

export default ItemList;

// 클릭 -> 얼럿창
// 클릭 -> 배열 삽입
// 타이핑 -> 실시간 input 탐지
//
