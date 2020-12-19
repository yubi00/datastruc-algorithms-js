function areThereDuplicates() {
  const store = {};

  for (let key in arguments) {
    let value = arguments[key];
    store[value] = ++store[value] || 1;
  }
  for (key in store) {
    if (store[key] > 1) {
      return true;
    }
  }

  return false;
}

function oneLineareThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

const res = areThereDuplicates("a", "b", "c");
console.log(res);
