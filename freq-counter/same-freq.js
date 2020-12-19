function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const store1 = {};
  const store2 = {};

  for (key of str1) {
    store1[key] = ++store1[key] || 1;
  }

  for (key of str2) {
    store2[key] = ++store2[key] || 1;
  }

  for (key in store1) {
    if (!store2[key]) {
      return false;
    }
    if (store1[key] !== store2[key]) {
      return false;
    }
  }

  return true;
}

const res = sameFrequency(1821, 2181);
console.log(res);
