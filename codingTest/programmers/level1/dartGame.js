// 카카오 블라인드 채용 1차 (2018)

// 다트 3번, 점수 합계
// 0~10점 획득 가능
// Single(S), Double(D), Triple(T), 이 영역에서는 점수 1 2 3제곱 됨
// *, # 옵션 존재, * : 해당 점수와 바로전에 얻은 점수를 각 2배, #는 해당 점수 마이너스
// * 첫번째에 나오면 * 점수만 두백
// *의 효과는 중첩가능
//  *는 #의 중첩가능 -2배 가능
// S, D, T는 점수마다 하나씩 존재
// *, #은 점수마다 둘중 하나만 존재, 존재X일 수도
// 0~10 점수와 문자 S D T * # 으로 입력 가능

const solution = (dartResult) => {
  let array = []; // array에 #, *, S, D, T를 기준으로 나누어서 담아둚.
  let pointer = 0;
  for (let i = 0; i < dartResult.length; i++) {
    let asc = dartResult[i].charCodeAt();
    let asc2 = i === dartResult.length - 1 ? 0 : dartResult[i + 1].charCodeAt();
    if (asc === 68 || asc === 83 || asc === 84) {
      if (asc2 === 42 || asc2 === 35) {
        array.push(dartResult.substr(pointer, i + 1 - pointer + 1));
        pointer = i + 2;
        continue;
      }
      array.push(dartResult.substr(pointer, i - pointer + 1));
      pointer = i + 1;
    }
  }

  let resultArr = [];
  let hap = 0;

  array.map((dart, index) => {
    // 각 배열에 계산 규칙을 적용해서 resultArr에 점수를 담아둚.
    let temp = dart.split("");
    if (temp[0] === "1" && temp[1] === "0") {
      temp[0] = 10;
      temp[1] = temp[2];
      temp[2] = temp[3];
    } else temp[0] = parseInt(temp[0]);
    switch (temp[1]) {
      case "S":
        resultArr[index] = temp[0];
        break;
      case "D":
        resultArr[index] = temp[0] ** 2;
        break;
      case "T":
        resultArr[index] = temp[0] ** 3;
        break;
    }
    if (temp[2]) {
      if (temp[2] === "#") {
        resultArr[index] = resultArr[index] * -1;
      }
      hap = hap + resultArr[index];
      if (temp[2] === "*") {
        resultArr[index] = resultArr[index] * 2;
        if (index !== 0) resultArr[index - 1] = resultArr[index - 1] * 2;
      }
    }
  });

  return resultArr.reduce((a, b) => a + b); // 모든 점수 합.
};

console.log(solution("1S*2T*3S"));
// 1S 2D* 3T => (1^1 + 2^2) * 2 + 3^3 = 37
//  점수|보너스|[옵션]
// 2시간 소요..?
// 해답을 보면 정규식 공부 필요..
// 아스키코드는 아닌것같고, 결국 필요한 문자를 배열에 담아서 indexOf()를 사용
// 0223 done.. hard.. 갈길이멀다...
