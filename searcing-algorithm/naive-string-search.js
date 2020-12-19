function naiveStringSearch(str, value) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (value[j] !== str[i + j]) {
        break;
      }
      if (j === value.length - 1) {
        count++;
      }
    }
  }
  return count;
}

const res = naiveStringSearch("lorie loled again lol", "lol");
console.log(res);
