let obj = {
    R: { type: 1, cnt: 0 },
    T: { type: 1, cnt: 0 },
    C: { type: 2, cnt: 0 },
    F: { type: 2, cnt: 0 },
    J: { type: 3, cnt: 0 },
    M: { type: 3, cnt: 0 },
    A: { type: 4, cnt: 0 },
    N: { type: 4, cnt: 0 },
};

const getResult = () => {
    let result = "";
    for(let i = 1; i < 5; i++) {
        let tmp = [];
        for(let key in obj) {
            if(obj[key].type === i) {
                tmp.push([key, obj[key].cnt]);
            }
        }
        const firAl = tmp[0][0];
        const firNum = tmp[0][1];
        const secAl = tmp[1][0];
        const secNum = tmp[1][1];
        
        if(firNum > secNum) {
            result+=firAl;
        } else if(firNum < secNum) {
            result+=secAl;
        } else {
            let fast = firAl < secAl ? firAl : secAl
            result+=fast;
        }
            
    }
    
    return result;
};

const solution = (survey, choices) => {
    for(let i = 0; i < survey.length; i++) {
        const sur = survey[i];
        const cho = choices[i];
        let choSur;
        let point = Math.abs(4 - cho);
        if(cho < 4) {
            choSur = sur[0];
        } else if(cho > 4) {
            choSur = sur[1];
        }
        if(choSur) {
            obj[choSur].cnt += point;
        }
    }
    
    const result = getResult();
    
    return result;
};