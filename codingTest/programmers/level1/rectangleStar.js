process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let temp = '';
    for(let j = 0; j < a; j++) {
      temp = temp.concat('*');
    }

    for(let i = 0; i < b; i++) {
        console.log(temp);
    }
});

// String.repeat(count)
// ex. 'abc'.repeat(2); => 'abcabc'