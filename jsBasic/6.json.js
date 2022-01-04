// JSON
// JavaScript Object Notation

// 1. Object to JSON(object -> JSON)
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // "" 더블 쿼드로 저장
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: 'null',
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  }
};


json = JSON.stringify(rabbit);
console.log(json);

// name만 json으로 변환하고 싶을 때, replacer 사용(함수, 배열, 객체)
json = JSON.stringify(rabbit, ["name"]); // 배열
console.log(json); // "name" : "tori"

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'chan' : value;
});
console.log(json);

// 2. JSON ot Object(JSON -> object)
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // error, json으로 변환될 때 함수가 사라지기 때문

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);