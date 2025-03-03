function solution(nameList, scoreList, photoList) {
  const scoreMap = nameList.reduce((acc, name, index) => {
    const score = scoreList[index];
    acc[name] = score;
    return acc;
  }, {});

  return photoList.map((photoNameList) =>
    photoNameList.reduce((acc, curr) => acc + (scoreMap[curr] ?? 0), 0)
  );
}