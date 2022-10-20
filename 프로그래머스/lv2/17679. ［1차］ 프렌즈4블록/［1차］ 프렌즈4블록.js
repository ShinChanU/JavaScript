// 19:50

function solution(m, n, board) {
    var answer = 0;
    let graph = Array.from({length: n}, () => []);
    for(let i = m-1; i >= 0; i--) {        
        for(let j = 0; j < n; j++) {
            graph[j].push(board[i][j]);           
        }
    }
    
    const dx = [0, 0, 1, 1];
    const dy = [0, 1, 1, 0];
    
     const insertDelCoord = (_delCoord, delArr) => {
         for(let [x, y] of delArr) {
              if(!_delCoord[x]) {
                _delCoord[x] = [y];
                answer++;
            } else {
                if(!_delCoord[x].includes(y)) {`                                                        `
                    _delCoord[x].push(y);
                    answer++;
                }
            }
         }
     };
    
    const changeZeroBoard = (obj) => {
        for(let x in obj) {
            for(let y of obj[x]) {
                graph[x][y] = "@";
            }
        }
    }

    while(1) {
        let delCoord = {};
        for(let x = 0; x < n; x++) {
            for(let y = 0; y < m; y++) {
                let nowBlock = graph[x][y]; // 초기 블록 알파벳
                if(nowBlock === "@") break;
                let cnt = 1;
                let tmpDelArr = [[x, y]];
                for(let k = 1; k < 4; k++) {
                    let nx = x + dx[k];
                    let ny = y + dy[k];
                    if(nx < n && ny < m && graph[nx][ny] === nowBlock) {
                        tmpDelArr.push([nx, ny]);
                    }
                }
                
                if(tmpDelArr.length === 4) {
                    insertDelCoord(delCoord, tmpDelArr);
                }
            }
        }
        
        if(!Object.keys(delCoord).length) break;
        changeZeroBoard(delCoord);
        graph = graph.map(arr => {
            arr.sort((a, b) => {
                if(b === "@") return -1
                else return 1;
            })
            return arr;
        });
        
    }
    
    // return graph.flatMap(v => v).filter(v => v === "@").length;
    
    return answer;
}