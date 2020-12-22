function hash(key, arrayLen) {
  //arraylen should be prime no too to lessen the collisions
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

const res = hash("hello", 13);
console.log(res);
