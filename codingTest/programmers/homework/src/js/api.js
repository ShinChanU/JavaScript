let loading = document.getElementById("loading");
let nodes = document.getElementsByClassName("Nodes");
let breadcrumb = document.getElementsByClassName("Breadcrumb")[0];
console.log(breadcrumb);
let level = 1;

// let $App = document.querySelector(".App");
// console.log($App);

const getResId = async (id) => {
  // doing..
  // 다시 렌더링을 할거냐
  // 없애고 다시 하냐
  try {
    loading.style.display = "block";
    const response = await fetch(
      `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${id}`,
      {
        method: "GET",
      }
    );
    if (response.status === 404) {
      console.log("Not found");
    } else if (response.status === 200) {
      level++;
      const data = await response.json();
      loading.style.display = "none";
      console.log(data);
      data.map((e) => {
        e.type === "DIRECTORY" ? createDirectory(e) : createFile(e);
      });
    } else {
      console.log(response.status);
    }
  } catch (err) {
    console.log(err);
    return "Error";
  }
};

const onClickFile = (e) => {
  console.log(e);
};

const onClickDir = (e) => {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = e.getAttribute("name");
  breadcrumb.appendChild(newDiv);
  let id = e.getAttribute("idNum");
  getResId(id);
};

const createFile = (file) => {
  console.log("cF");
  let nodes = document.getElementsByClassName("Nodes");
  let newNode = document.createElement("div");
  let newImg = document.createElement("img");
  let newText = document.createElement("div");
  newNode.setAttribute("class", "Node");
  newNode.setAttribute("idNum", file.id);
  newNode.setAttribute("onClick", `onClickFile(this)`);
  newText.innerHTML = file.name;
  newImg.setAttribute("src", "./assets/file.png");
  newNode.appendChild(newImg);
  newNode.appendChild(newText);
  nodes[0].appendChild(newNode);
};

const createDirectory = (dir) => {
  console.log("cD");
  let nodes = document.getElementsByClassName("Nodes");
  let newNode = document.createElement("div");
  let newImg = document.createElement("img");
  let newText = document.createElement("div");
  newNode.setAttribute("class", "Node");
  newNode.setAttribute("name", dir.name);
  newNode.setAttribute("idNum", dir.id);
  newNode.setAttribute("onClick", `onClickDir(this)`);
  newText.innerHTML = dir.name;
  newImg.setAttribute("src", "./assets/directory.png");
  newNode.appendChild(newImg);
  newNode.appendChild(newText);
  nodes[0].appendChild(newNode);
};

window.onload = async () => {
  try {
    const response = await fetch(
      "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev",
      {
        method: "GET",
      }
    );
    if (response.status === 404) {
      console.log("Not found");
    } else if (response.status === 200) {
      const data = await response.json();
      loading.style.display = "none";
      console.log(data);
      data.map((e) => {
        createDirectory(e);
      });
    } else {
      console.log(response.status);
    }
  } catch (err) {
    console.log(err);
    return "Error";
  }
};

// const getRoot = async () => {
//   const response = await fetch(
//     "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev",
//     {
//       method: "GET",
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// };

// getRoot();
