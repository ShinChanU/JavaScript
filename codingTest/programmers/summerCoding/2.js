const solution = (rooms, target) => {
  let result = [];
  let room = {};

  for (let x of rooms) {
    let [num, names] = x.slice(1).split("]");
    names = names.split(",");
    names.map((e) => {
      if (room[e] !== undefined) {
      } else {
        room[e] = [];
      }
    });
    names.map((e) => {
      room[e].push(Number(num));
      room[e].sort((a, b) => b - a);
    });
  }

  console.log(room);

  for (let key in room) {
    if (!room[key].includes(target)) {
      result.push([key, room[key].length]);
    }
  }

  for (let el of result) {
    let [key, op] = el;
    let dis = Math.abs(room[key][0] - target);
    el.push(dis);
  }

  const compare = (a, b) => {
    if (a > b) return -1;
    if (a < b) return -1;
    return 0;
  };

  console.log(result);
  result.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) {
        return compare(a[0], b[0]);
      } else {
        return a[2] - b[2];
      }
    } else {
      return a[1] - b[1];
    }
  });

  console.log(result);

  return result.map((e) => e[0]);
};

console.log(
  solution(["[403]James", "[404]Azad,Louis,Andy", "[101]Azad,Guard"], 403)
);
// console.log(
//   solution(["[101]azad,Guard", "[202]Guard", "[303]Guard,Dzaz"], 202)
// );
// console.log(solution(["[1234]None,Of,People,Here", "[5678]Wow"], 1234));
// console.log(solution(["[1234]People,Here,None,Of", "[5678]Wow,Here"], 1232));
