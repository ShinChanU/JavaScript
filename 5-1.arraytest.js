'use strict';

// Q1
// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.toString());

// Q2
// const fruit = '🍎, 🥝, 🍌, 🍒';
// const fruits = fruit.split(',');
// console.log(fruits);

// Q3
// const array = [1, 2, 3, 4, 5];
// console.log(array.reverse());

// Q4
// const array = [1, 2, 3, 4, 5];
// array.splice(0, 2);
// console.log(array);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5 find a student with the score 90
// const result = students.find((student) => student.score === 90)
// console.log(result);

// Q6 make an array of enrolled students
// const result = students.filter((student) => student.enrolled);
// console.log(result);

// Q7 make an array containing only the students' score
// result should be: [40, 80, 90, 66, 88]

// const result = [];
// for(let i=0; i<students.length; i++) {
//   result[i] = students[i].score;
// }
// console.log(result); 내가 작성한 코드

// const result = students.map((student) => student.score);
// console.log(result);  배열 API를 사용한 코드

// Q8 check if there is a student with the score lower than 50
// const result = students.filter((student) => student.score < 50);
// console.log(result);
// const result = students.some((student) => student.score < 50);
// console.log(result); // bool 값 리턴

// Q9. compute students' average score
// const scoreArray = students.map((student) => student.score);
// let sumScore = 0;
// for(let i = 0; i < scoreArray.length; i++) {
//   sumScore += scoreArray[i];
// }
// console.log(sumScore/scoreArray.length);
// console.clear();
// const result = students.reduce((acc, cur) => {
//   return acc + cur.score;
// }, 0);
// console.log(result/students.length);
// reduce : Array.reduce(acc, cur, i, array)
// => acc : last return value, cur : current value, i : current index, array : reduce all array

//  Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// const resultArray = students.map((student) => student.score);
// const result = resultArray.toString();
// console.log(result);
// const result = students.map((student) => student.score)
// .filter((score) => score >= 50)
// .join();
// console.log(result);


// Q11. Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// const resultArray = students.map((student) => student.score);
// resultArray.sort();
// const result = resultArray.toString();
// console.log(result );
// const result = students
//   .map((student) => student.score)
//   .sort((a, b) => b - a)
//   .join();
// console.log(result);
