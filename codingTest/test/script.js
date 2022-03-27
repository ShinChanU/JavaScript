// const nameEl = document.getElementById("name");
// const firstRrnEl = document.getElementById("firstRrn");
// const secondRrnEl = document.getElementById("secondRrn");
const btnEl = document.getElementById("btn");
// const articleEl = document.getElementById("article");

const onClick = () => {
  const obj = document.frm;
  let name = obj.name.value;
  let rrn1 = obj.firstRrn.value; // 주민 1
  let rrn2 = obj.secondRrn.value; // 주민 2
  const rrn = rrn1 + rrn2; // 주민 전체
  let arr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let result = 0;
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * rrn[i];
    result += arr[i] * rrn[i + 1];
  }

  result = (11 - (result %= 11)) % 10; // 2 3 4 번 수행

  if (result === rrn[12]) answer = "유효";
  else answer = "무효";

  // if (rrn[12] === result) console.log(result);
};

btn.addEventListener("click", onClick);
