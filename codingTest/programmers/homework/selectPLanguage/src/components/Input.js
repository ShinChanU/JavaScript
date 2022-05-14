function Input({ $app, initialState, onChange }) {
  this.$target = document.createElement("form");
  this.$target.className = "SearchInput";
  this.state = initialState; // input으로 들어오는 값
  $app.appendChild(this.$target);
  this.onChange = onChange;
  // this.setState = (nextState) => {
  //   this.state = nextState;
  //   this.render();
  // };

  this.render = () => {
    this.$target.innerHTML = `
      <input 
        id="focus"
        class="SearchInput__input"
        type="text"
        placeholder="프로그램 언어를 입력하세요."
        value=${this.state}
      />
    `;
  };

  // let $input = document.querySelector(".SearchInput");
  this.$target.addEventListener("keyup", (e) => {
    const actionIgnoreKeys = [
      "Enter",
      "ArrowUp",
      "ArrowRigth",
      "ArrowLeft",
      "ArrowDown",
    ];
    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });

  this.$target.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  this.render();

  console.log(this.$target.closest("#focus"));
  let input = document.querySelector("#focus");
  console.log(input);
  input.focus();
}

export default Input;
