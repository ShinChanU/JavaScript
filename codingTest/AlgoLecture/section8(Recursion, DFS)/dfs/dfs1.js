const solution = (v) => {
  // v: vertex 정점
  let answer1 = "";
  let answer2 = "";
  let answer3 = "";

  const DFS1 = (v) => {
    // 전위 PreOrder
    if (v >= 8) return;
    else {
      answer1 += v;
      DFS1(v * 2);
      DFS1(v * 2 + 1);
    }
  };

  const DFS2 = (v) => {
    // 중위 InOrder
    if (v >= 8) return;
    else {
      DFS2(v * 2);
      answer2 += v;
      DFS2(v * 2 + 1);
    }
  };

  const DFS3 = (v) => {
    // 후위 PostOrder
    if (v >= 8) return;
    else {
      DFS3(v * 2);
      DFS3(v * 2 + 1);
      answer3 += v;
    }
  };

  DFS1(v); // 전위
  console.log(answer1);

  DFS2(v); // 중위
  console.log(answer2);

  DFS3(v); // 후위
  console.log(answer3);

  return;
};

solution(1); // 1~7 노드, 전위, 중위, 후위식 출력

// 0417 study, lecture
