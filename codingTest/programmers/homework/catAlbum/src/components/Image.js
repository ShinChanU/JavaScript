const IMAGE_PATH_PREFIX =
  "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public";

function ImageView({ $app, initialState, modalClose }) {
  this.state = initialState; // image url 잇을듯
  this.modalClose = modalClose;
  this.$target = document.createElement("div");
  this.$target.className = "Modal Loading";
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.addModalCloseEvent = () => {
    this.$target.addEventListener("click", (e) => {
      const $node = e.target.closest(".content");

      if (!$node) {
        this.modalClose();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.modalClose();
      }
    });
  };

  this.render = () => {
    this.$target.innerHTML = `
      <div class="content">
      ${this.state ? `<img src="${IMAGE_PATH_PREFIX}${this.state}" />` : ""}
      </div>
    `;
    this.$target.style.display = this.state ? "block" : "none";
  };

  this.addModalCloseEvent();
  this.render();
}

export default ImageView;
