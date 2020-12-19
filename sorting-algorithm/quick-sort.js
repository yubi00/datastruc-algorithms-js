function partition(arr, start, end) {
  let pivot = arr[end];
  let partitionIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      partitionIndex++;
    }
  }
  [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
  return partitionIndex;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let partitionIndex = partition(arr, start, end);

    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
  }
  return arr;
}
const arr = [7, 2, 10, 1, 6, 8, 5, 3, 4];
const res = quickSort(arr, 0, arr.length - 1);
console.log(res);

//Big O of Merge sort
//Best case: O(nlogn)
//average case: O(nlogn)
//worst case: O(n2)

//space complexity: O(1)
