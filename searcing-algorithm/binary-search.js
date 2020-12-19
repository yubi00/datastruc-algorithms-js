//better approach using divide and conquer pattern- binary search
// with the big O of O(logn)
function binarySearch(arr, num) {
  if (arr.length === 0) return -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

const result = binarySearch([1, 2, 4, 5, 6, 10, 12, 15], 3);
console.log(result);
