function DataGrid({ $app, initialState, column, key, onClick, onChange }) {
  this.state = initialState;
  this.onClick = onClick;
  this.onChange = onChange;
  this.order = {
    sortOrder: "ASC",
    index: null,
  };
  this.$target = document.createElement("div");
  $app.appendChild(this.$target);
  let tdData;
  let rowData;
  if (key === 1) {
    rowData = [
      "email",
      ["profile", "name"],
      ["profile", "birthday"],
      ["profile", "address"],
      "score",
      "createdAt",
      "updatedAt",
    ];
  } else if (key === 2) {
    rowData = [
      "username",
      "총점",
      "평균",
      ["scores", "html"],
      ["scores", "css"],
      ["scores", "javascript"],
      ["scores", "korean"],
      ["scores", "english"],
      ["scores", "math"],
    ];
  } else if (key === 3) {
    rowData = [
      "index",
      "nickname",
      ["profile", "age"],
      ["profile", "remoteWorkLocation"],
      ["profile", "position"],
      "verified",
    ];
  }

  // switch(key)로 데이터 구분, <tr>태그 생성
  switch (key) {
    case 1:
      tdData = this.state.data
        .map(
          (data, index) =>
            `<tr>${rowData
              .map((row) => {
                if (typeof row !== "string") {
                  let res = data;
                  for (let x of row) res = res[x];
                  return `<td>${res}</td>`;
                }
                return `<td>${data[row]}</td>`;
              })
              .join("")}</tr>`
        )
        .join("");
      break;
    case 2:
      tdData = this.state.data
        .map(
          (data, index) => `<tr>
        ${rowData
          .map((row) => {
            if (row === "총점" || row === "평균") {
              let sum = 0;
              for (let key in data.scores) sum += data.scores[key];
              return row === "총점"
                ? `<td>${sum}</td>`
                : `<td>${(sum / 6).toFixed(2)}</td>`;
            } else if (typeof row !== "string") {
              let res = data;
              for (let x of row) res = res[x];
              return `<td>${res}</td>`;
            } else {
              return `<td>${data[row]}</td>`;
            }
          })
          .join("")}
      </tr>`
        )
        .join("");
      break;
    case 3:
      tdData = this.state.data
        .map(
          (data, index) => `<tr>
        ${rowData
          .map((row) => {
            if (row === "verified") {
              return `<td>${data[row] ? "검증" : "미검증"}</td>`;
            } else if (typeof row !== "string") {
              let res = data;
              for (let x of row) res = res[x];
              return `<td>${res}</td>`;
            } else {
              return `<td>${data[row]}</td>`;
            }
          })
          .join("")}
      </tr>`
        )
        .join("");
      break;
    default:
      break;
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log("render");
    this.$target.innerHTML = `
      <input value="${this.state.value}" />
      <table>
        <thead>
          <tr>
          ${column
            .map(
              (col, index) =>
                `<th class="header" data-index="${index}" >${col}
                ${
                  this.order.index === index
                    ? this.order.sortOrder === "ASC"
                      ? "🔼"
                      : "🔽"
                    : ""
                }
                </th>`
            )
            .join("")}
          </tr>
        </thead>
        <tbody>
        ${tdData}
        </tbody>
      </table>
    `;
  };

  this.render();

  this.$target.addEventListener("click", (e) => {
    const $th = e.target.closest(".header");

    if ($th) {
      const { index } = $th.dataset;
      this.order.index = index;
      if (this.order.index !== index) {
        this.order.index = index;
        this.order.sortOrder = "ASC";
      } else {
        this.order.sortOrder = this.order.sortOrder === "ASC" ? "DESC" : "ASC";
      }
      this.onClick(Number(index), rowData[index]);
    }
  });

  this.$target.addEventListener("keyup", (e) => {
    this.onChange(e.target.value);
  });
}

export default DataGrid;
