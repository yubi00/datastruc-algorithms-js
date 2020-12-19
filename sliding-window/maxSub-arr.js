//Time complexity of O(n2)
function maxSubarrSum(arr, num) {
  //handling edge case
  if (num > arr.length) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum += arr[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

const res = maxSubarrSum([2, 6, 4, 2, 1, 3, 2, 6, 3], 3);
console.log(res);

//much faster and better approach using sliding window pattern context.lineWidth
// the Big O of O(n)

function slidingwinMax(arr, num) {
  let max = 0;
  let temp = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
const result = slidingwinMax([2, 6, 4, 2, 1, 3, 2, 6, 3], 3);
console.log(result);
