function linearSearch(arr, value) {
  const res = arr.sort((a, b) => a - b);
  console.log(res);
  if (arr.length === 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

const res = linearSearch([1, 3, 6, 7, 10, 5], 7);
console.log(res);
