function solution(wallpaper) {
  const checkList = [];

  wallpaper.forEach((str, row) => {
    for (let col = 0; col < str.length; col++) {
      const isCheck = str[col] === "#";
      if (isCheck) {
        checkList.push([row, col]);
      }
    }
  });

  let smallRowPoint = Number.MAX_SAFE_INTEGER;
  let smallColPoint = Number.MAX_SAFE_INTEGER;
  let largeRowPoint = Number.MIN_SAFE_INTEGER;
  let largeColPoint = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < checkList.length; i++) {
    const [row, col] = checkList[i];
    if (smallRowPoint > row) {
      smallRowPoint = row;
    }
    if (largeRowPoint < row) {
      largeRowPoint = row;
    }
    if (smallColPoint > col) {
      smallColPoint = col;
    }
    if (largeColPoint < col) {
      largeColPoint = col;
    }
  }

  return [smallRowPoint, smallColPoint, largeRowPoint + 1, largeColPoint + 1];
}