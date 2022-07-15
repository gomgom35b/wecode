let arr = [];

function even() {
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(even());
