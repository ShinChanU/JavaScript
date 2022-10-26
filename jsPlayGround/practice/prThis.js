let test2 = "Test";

function test(x) {
  console.log(this.test2);
}

const test3 = (x) => {
  console.log(this.test2);
};

test(1);
test3(1);

const object = {
  name: "chan",
  years: 1997,
  speak: function SPEAK() {
    console.log(this.name);
    function getName() {
      return this.name;
    }
    return getName();
  },
  speak2: function SPEAK() {
    console.log(this.name);
    const getName = () => {
      return this.name;
    };
    return getName();
  },
};

console.log(object.speak());
console.log(object.speak2());

const obj = {
  a: "hi",
  b: function () {
    const hi = () => console.log(this.a, this);
    hi();
  },
  c: function () {
    console.log(this.a, this);
  },
};

obj.b();
obj.c();
