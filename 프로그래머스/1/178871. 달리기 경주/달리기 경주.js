function solution(playerRankList, callings) {
  const nameRankHashMap = playerRankList.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});

  callings.forEach((callingName) => {
    const callingPlayerRank = nameRankHashMap[callingName];

    if (callingPlayerRank === 0) return;

    const prevPlayerName = playerRankList[callingPlayerRank - 1];
    playerRankList[callingPlayerRank - 1] = callingName;
    playerRankList[callingPlayerRank] = prevPlayerName;

    nameRankHashMap[callingName] = callingPlayerRank - 1;
    nameRankHashMap[prevPlayerName] = callingPlayerRank;
  });

  return playerRankList;
}