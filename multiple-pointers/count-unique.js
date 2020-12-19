//Big O of O(n2)
function naiveCountUnique(arr) {
  let result = [];
  for (value of arr) {
    if (result.indexOf(value) === -1) {
      result.push(value);
    }
  }
  return result.length;
}

const res = naiveCountUnique([1, -1, 1]);
console.log(res);

//Big O of O(n)
function betterCountUnique(arr) {
  const store = {};
  for (key of arr) {
    store[key] = ++store[key] || 1;
  }
  return Object.keys(store).length;
}

const result = betterCountUnique([1, 2, 2, 2]);
console.log(result);

//another approach using multiple pointers
function pointersCounterUniue(arr) {
  //   return [...new Set(arr)].length;
  //if arr is empty handling edge case
  if (arr.length === 0) {
    return 0;
  }
  let left = 0;
  let right = left + 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return left + 1;
}

const ans = pointersCounterUniue([1, 1, 2, 2, 3]);
console.log(ans);
