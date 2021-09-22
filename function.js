'use strict';

// 1. Function declaration
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. parameters
function changeName(obj) {
  obj.name = 'coder';
}

const chan = { name: 'chan' };
changeName(chan);
console.log(chan);

// 3. default parameters
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`)
}
showMessage('Hi', 'chan');
showMessage('Hi');

// 4. Rest parameters (added in ES6)  
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('Shin', 'Chan', 'Woo');
console.clear();

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello'
  }
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic..
  }
}


// 1. Function expression
//good 
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('Yes!');
};

const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
add(2, 3);
const simpleMultiply = (a, b) => {

  return a * b;
};

// IIFE
function hello() {
  console.log('IIFE');
}
hello();

(function hello() {
  console.log('IIFE');
})();

// function calculate(command, a, b) {
//   if (command == 'add') {
//     return a + b;
//   } else if (command == 'substract') {
//     return a - b;
//   } else if (command == 'divide') {
//     return a / b;
//   } else if (command == 'multiply') {
//     return a * b;
//   } else if (command == 'remainder') {
//     return a % b;
//   } else {
//     return;
//   }
// }

// function calculate2(command, a, b) {
//   switch (command) {
//     case 'add':
//       console.log(a + b);
//       break;
//     case 'substract':
//       console.log(a - b);
//       break;
//     case 'divide':
//       console.log(a / b);
//       break;
//     case 'multiply':
//       console.log(a * b);
//       break;
//     case 'remainder':
//       console.log(a % b);
//       break;
//     default:
//       throw Error('No!');
//   }
// }

// calculate2('sdf', 5, 5);
