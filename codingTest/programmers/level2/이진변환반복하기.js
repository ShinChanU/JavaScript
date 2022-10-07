const solution = (s) => {
  let changCnt = 0;
  let zeroCnt = 0;

  while (1) {
    if (s === "1") break;
    let nowL = s.length; // 지금 s 길이
    s = [...s].filter((e) => +e === 1).join(""); // 0 제거 후 s
    let nextL = s.length; // 0 제거 후 s 길이
    zeroCnt += nowL - nextL; // 제거한 0의 개수
    s = nextL.toString(2); // 길이를 이진 변환
    changCnt++;
  }

  return [changCnt, zeroCnt];
};

const s1 = "110010101001"; //	[3,8]
const s2 = "01110"; //	[3,3]
const s3 = "1111111"; // [4,1]

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
