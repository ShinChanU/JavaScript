const solution = (record) => {
  let answer = [];
  let id_nickname = new Map();
  let tmp = [];

  record.map((e) => {
    let [cmd, id, nickname] = e.split(" ");
    if (cmd === "Change") {
      id_nickname.set(id, nickname);
    } else {
      tmp.push([cmd, id]);
      if (cmd === "Enter") {
        id_nickname.set(id, nickname);
      }
    }
  });

  tmp.map((e) => {
    answer.push(
      e[0] === "Enter"
        ? `${id_nickname.get(e[1])}님이 들어왔습니다.`
        : `${id_nickname.get(e[1])}님이 나갔습니다.`
    );
  });

  return answer;
};

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
// 0506 40분 pass
