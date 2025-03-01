function solution(friends, gifts) {
  const obj = friends.reduce((acc, curr) => {
    acc[curr] = {
      내가준사람: {},
      나한테준사람: {},
      score: 0,
    };

    return acc;
  }, {});

  // gifts 이력으로 주고받은 개수 정리
  gifts.forEach((e) => {
    const [준친구, 받은친구] = e.split(" ");

    if (obj[준친구].내가준사람[받은친구]) {
      obj[준친구].내가준사람[받은친구] = obj[준친구].내가준사람[받은친구] + 1;
    } else {
      obj[준친구].내가준사람[받은친구] = 1;
    }

    if (obj[받은친구].나한테준사람[준친구]) {
      obj[받은친구].나한테준사람[준친구] =
        obj[받은친구].나한테준사람[준친구] + 1;
    } else {
      obj[받은친구].나한테준사람[준친구] = 1;
    }
  });

  // score 계산 (선물지수))
  Object.entries(obj).forEach(([내이름, { 나한테준사람, 내가준사람 }]) => {
    const 받은점수 = Object.values(나한테준사람).reduce(
      (acc, curr) => acc + curr,
      0
    );
    const 준점수 = Object.values(내가준사람).reduce(
      (acc, curr) => acc + curr,
      0
    );

    const score = 준점수 - 받은점수;
    obj[내이름].score = score;
  });

  let answer = 0;

  for (let i = 0; i < friends.length; i++) {
    const 내이름 = friends[i];
    let 내가받을선물개수 = 0;

    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue;

      const 비교친구이름 = friends[j];

      const 내가친구한테준개수 = obj[내이름].내가준사람[비교친구이름] ?? 0;
      const 친구가나한테준개수 = obj[비교친구이름].내가준사람[내이름] ?? 0;

      // 두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.
      if (내가친구한테준개수 > 0 || 친구가나한테준개수 > 0) {
        if (내가친구한테준개수 > 친구가나한테준개수) {
          내가받을선물개수++;
        }
      }

      // 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
      if (
        (내가친구한테준개수 === undefined &&
          친구가나한테준개수 === undefined) ||
        내가친구한테준개수 === 친구가나한테준개수
      ) {
        if (obj[내이름].score > obj[비교친구이름].score) {
          내가받을선물개수++;
        }
      }
    }

    if (내가받을선물개수 > answer) answer = 내가받을선물개수;
  }

  return answer;
}