const solution = (new_id) => { 
  // - 45
  // _ 95
  // . 46
  // 0 48
  // 9 57
  // a 97
  // z 122

  let arr = new_id.toLowerCase().split("");
  let arr2 = [];
  console.log(arr);

  arr.map((e) => {
      let eAscii = e.charCodeAt(0);
      if (
          (eAscii === 45) || (eAscii === 46) || (eAscii === 95) || (48 <= eAscii && eAscii <= 57) || (97 <= eAscii && eAscii <= 122)
      ) arr2.push(e);
      
  });

  return arr2;
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));