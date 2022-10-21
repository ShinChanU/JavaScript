const INF = Infinity;

function solution(n, s, a, b, fares) {
    let answer = Number.MAX_SAFE_INTEGER;
    let graph = Array.from({length: n}, () => Array(n).fill(INF));
    for(let i = 0; i < n; i++) graph[i][i] = 0;
    
    for(let [c, d, f] of fares) {
        graph[c-1][d-1] = f;
        graph[d-1][c-1] = f;
    }

    
    for(let k = 0; k < n; k++) { // 경유
        for(let i = 0; i < n; i++) { // 출발
            for(let j = 0; j < n; j++) { // 도착
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])  
            }
        }
    }
    
    graph[s-1].forEach((dis, togetherArriveNode) => {
        let arriveA = graph[togetherArriveNode][a-1];
        let arriveB = graph[togetherArriveNode][b-1];
        answer = Math.min(answer, dis+arriveA+arriveB);
    })
    
    
    return answer;
}