function stringCount(str) {
  const s = str.replace(/\W/g, "");
  console.log(s);
  const store = {};
  for (char of s) {
    let c = char.toLowerCase();
    store[c] = store[c] ? ++store[c] : 1;
  }
  return store;
}

const count = stringCount("Hello$ world3434, Die moth2erFuckeR 3434!");
console.log(count);
