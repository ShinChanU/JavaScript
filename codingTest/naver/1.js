'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

async function solution  (U, N) {
    let test= true;
    let answer = [];
    let errUser = false;
    let errGender = false;
    let userBrandP = await getLikedBrands(U.id).then(function(result) {
        return result;
    }).catch(e => {errUser = true});
    let genderBrandP = await getTopBrandsForGender(U.gender).then(function(result) {
        return result;
    }).catch(e => {errGender = true});

    if(userBrandP.length > N) userBrandP.slice(N);

    userBrandP.map(e => answer.push(e.name));
    let rest = N - answer.length;
    while(genderBrandP.length) {
        if(rest === 0) break;
        let x = genderBrandP.shift();
        if(!answer.includes(x.name)) {
            answer.push(x.name);
        }
        rest--;
    }

    return new Promise((resolve, reject) => {
        if(answer.length < N || (errUser && errGender)) {
        // Reject the promise with the result
          reject(CustomError("Not enough data"))
        } else {
        // Resolve the promise with the result
          resolve(answer);
        }
    });
}