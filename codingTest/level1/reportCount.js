'use strict';

// id_list : 이용자의 id 배열
// report :각 이용자가 신고한 이용자의 ID정보가 담긴 배열 
// k: 정지 기준 횟수
const solution = (id_list, report, k) => {
    // console.log(id_list, report, k);

    let answer = [];
    let repoter = []; // 신고한 유저
    let danger = []; // 신고된 유저
    let stopId = []; // 정지 확정 유저
    let count = [];
    let a = [];

    // report  배열에서 중복된 값은 하나로 쳐야함

    for (let i = 0; i < report.length; i++) {
        let temp = report[i]; // string
        let temp2 = temp.split(" "); // array
        repoter.push(temp2[0]);
        danger.push(temp2[1]);
    }
    console.log(repoter, danger);

    for (let i = 0; i < id_list.length; i++) {
        let temp = danger.filter(e => e === id_list[i]);
        if (temp.length >= k) {
            stopId.push(temp[0]);
        }
    }
    console.log(stopId); // 정지 확정 유저

    let object = Object.assign({}, id_list);
    console.log(object.key);
    for (let i = 0; i < stopId.length; i++) {
        for (let j = 0; j < danger.length; j++) {
            if (stopId[i] === danger[j]) {
                count[j] = id_list.filter(e => e === repoter[j]);
                console.log(count);
            }
        }
    }

    // console.log(stopIdArr);

    return answer; // 신고에 성공한 유저가 받을 메일 개수
};

const idList = ["muzi", "frodo", "apeach", "neo"];
const reportList = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;

const result = solution(idList, reportList, k);

// console.log(result);

// 각 유저는 한번에 한명 신고가능
// 한 유저 여러번 신고가능, 단 동일 유저는 횟수 1, 어차피 한번
// k번이상 신고되면 이용 정지, 신고한 모든 유저에게 메일발송
// 한꺼번에 내용 이용정지, 메일 발송

// 01 25 하는 중.. so hard..
// 참고 하셈..
// https://velog.io/@dnjsdud2257/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A0%EA%B3%A0-%EA%B2%B0%EA%B3%BC-%EB%B0%9B%EA%B8%B0-JavaScript