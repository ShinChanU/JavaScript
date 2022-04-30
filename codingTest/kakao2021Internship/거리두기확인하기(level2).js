const solution = (places) => {
  let answer = [];

  for (let place of places) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let n = place.length;
    let flag = 1;

    for (let i = 0; i < place.length; i++) {
      if (flag)
        for (let j = 0; j < place.length; j++) {
          if (flag)
            for (let k1 = 0; k1 < dx.length; k1++) {
              if (flag)
                if (place[i][j] === "P") {
                  let nx = i + dx[k1];
                  let ny = j + dy[k1];
                  if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    let postPl = place[nx][ny];
                    if (postPl === "P") {
                      flag = 0;
                      break;
                    } else if (postPl === "X") continue;
                    else {
                      if (flag)
                        for (let k2 = 0; k2 < dx.length; k2++) {
                          if (k2 !== (k1 + 2) % 4) {
                            let nx2 = nx + dx[k2];
                            let ny2 = ny + dy[k2];
                            if (nx2 >= 0 && nx2 < n && ny2 >= 0 && ny2 < n) {
                              let postPl2 = place[nx2][ny2];
                              if (postPl2 === "P") {
                                flag = 0;
                                break;
                              }
                            }
                          }
                        }
                    }
                  }
                }
            }
        }
    }

    answer.push(flag);
  }

  return answer;
};

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
// 0430 54분 소요, pass
