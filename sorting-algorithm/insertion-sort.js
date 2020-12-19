function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

const res = insertionSort([7, 2, 5, 10, 1, 3]);
console.log(res);
