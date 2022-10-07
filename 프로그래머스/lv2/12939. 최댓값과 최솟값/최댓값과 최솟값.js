const solution = (s) => {
  const arr = s.split(" ").map((e) => +e);
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
};