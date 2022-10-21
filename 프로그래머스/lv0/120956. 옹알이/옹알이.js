const obj = {
    "a": "aya",
    "y": "ye",
    "w": "woo",
    "m": "ma"
}

function solution(babbling) {
    let answer = 0;
    
    for(let str of babbling) {
        let pt = 0;
        let tmp = str.slice();
        let now;
        while(1) {
            if(obj[tmp[pt]] !== undefined 
               && obj[tmp[pt]] === tmp.slice(0, obj[tmp[pt]].length) 
               && obj[tmp[pt]] !== now) {
                now = obj[tmp[pt]];
                tmp = tmp.slice(obj[tmp[pt]].length)
            } else break;
        }
        
        if(tmp.length === 0) answer++
    }
    
    return answer;
}