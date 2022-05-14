const MAX_DISPLAY_COUNT = 5;

function SelectedItem({ $app, initialState }) {
  this.state = initialState; // items 배열
  this.$target = document.createElement("div");
  this.$target.className = "SelectedLanguage";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > MAX_DISPLAY_COUNT) {
      const startPosition = this.state.length - MAX_DISPLAY_COUNT;
      this.state = this.state.slice(
        startPosition,
        MAX_DISPLAY_COUNT + startPosition
      );
    }

    this.render();
  };

  this.render = () => {
    console.log(this.state);
    this.$target.innerHTML = `
      <ul>
      ${this.state.map((item) => `<li>${item}</li>`).join("")}
      </ul>  
    `;
  };

  this.render();
}

export default SelectedItem;
