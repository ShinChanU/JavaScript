const solution = (topping) => {
    let result = 0;
    const firstToppingTypeObj = {};
    const secondToppingTypeObj = {};
    let firstTypesNum = 0;
    let secondTypesNum = 0;
    
    topping.forEach(e => {
        if(!firstToppingTypeObj[e]) {
            firstToppingTypeObj[e] = 1;
            firstTypesNum++;
        }
        else firstToppingTypeObj[e]++;
    });
    
    topping.forEach(e => {
        firstToppingTypeObj[e]--;
        if(!secondToppingTypeObj[e]) {
                secondToppingTypeObj[e] = 1;
                secondTypesNum++;
        } else secondToppingTypeObj[e]++;
        
        if(firstToppingTypeObj[e] === 0) firstTypesNum--;
        
        if(firstTypesNum === secondTypesNum) result++;
    })
    
    
    
    
    return result;
};
