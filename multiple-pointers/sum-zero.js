//naive approach of big o of n2
function sumZero(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

const res = sumZero([-5, -4, -1, 0, 1, 2, 3]);
console.log(res);

//better algorith of big o of o(n)

function betterSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      result.push([arr[left], arr[right]]);
    }

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return result;
}

const result = betterSumZero([-5, -4, -2, -1, 0, 10]);
console.log(result);
