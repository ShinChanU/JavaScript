// slice 후 sort 후 index에 해당하는 값 => 배열로, 
const solution = (array, commands) => {
  return commands.map((e) => (
    array.slice(e[0]-1, e[1]).sort((a, b) => a-b)[e[2]-1]
  ));
};


// commands: [i, j, k], [i, j, k] ...
// i: 출발, j: 종료, k: 인덱스
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))