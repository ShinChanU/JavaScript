const solution = (e) => {
    let set = new Set();
    let n = e.length;
    let e2 = [...e, ...e];
    
    for(let i = 0; i < n; i++) 
        for(let j = 0 ; j < n; j++) 
            set.add(e2.slice(j, j+i+1).reduce((a, b) => a+b))
    
    return set.size
};