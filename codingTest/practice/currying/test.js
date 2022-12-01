const addStrAll = (...args) => args.join(" ");

const curry =
  (f) =>
  (...args) => {
    return args.length ? curry(f.bind(f, ...args)) : f();
  };

const solution = curry(addStrAll);

console.log(solution("Hello")("World!")());
console.log(
  solution("가")("나")("다라")("마")("바사")("아자차카")("타")("파")("하")()
);

// currying 예시
