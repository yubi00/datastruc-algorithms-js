//naive approach of big O of O(n)
function findNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const res = findNumber([1, 2, 3, 5, 6, 8, 9, 10, 12, 15], 9);
console.log(res);

//better approach using divide and conquer pattern- binary search
// with the big O of O(logn)
function binarySearch(arr, num) {
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

const result = binarySearch([1, 2, 4, 5, 6, 10, 12, 15], 5);
console.log(result);
