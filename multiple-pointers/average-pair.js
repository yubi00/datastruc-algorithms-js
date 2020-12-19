//naive approach with the time complexity of O(n2)
function averagePair(arr, target) {
  if (arr.length === 0) return [];
  let result = [];
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      avg = (arr[i] + arr[j]) / 2;
      if (avg === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

const res = averagePair([1, 3, 3, 5, 6, 7, 9, 10, 14, 19], 12);
console.log(res);

//better approach using multiple pointers with the big o of O(n)
function betterAveragePair(arr, target) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

const result = betterAveragePair([1, 3, 3, 5, 6, 7, 9, 10, 14, 19], 12);
console.log(result);
