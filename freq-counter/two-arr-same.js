//better and faster approach of big O of o(n)
function same(arr1, arr2) {
  //edge cases
  if (arr1.length !== arr2.length) {
    return false;
  }
  //create two objects to record the occurences of each item in both of an array
  const store1 = {};
  const store2 = {};

  //loop throughh first array
  for (let key of arr1) {
    //store the count of an item in such a way that, if its already in store, increase the count by 1, or else assign to 1
    store1[key] = ++store1[key] || 1;
  }

  //repeat the above process for another array
  for (let key of arr2) {
    store2[key] = ++store2[key] || 1;
  }

  //see if i am storing the correct values and keys
  console.log(store1);
  console.log(store2);

  //go through all the keys in either of the store and check the value in the corresponding store
  for (key in store1) {
    //check if second store has has the key equal to the power of 2 ( square ) and return false if not
    if (!(key ** 2) in store2) {
      return false;
    }
    //check if the occurences of the value of key of the first store is equal to the value of occ of the power of 2 of the key in the second store
    if (store1[key] !== store2[key ** 2]) {
      return false;
    }
  }

  //if everything satisfies, return true
  return true;
}

//Naive or bruteforce approach of solving the problem with the time complexity of O(n2) coz of indexof(o(n))
function naiveSame(arr1, arr2) {
  //edge cases
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop throught the first array
  for (value of arr1) {
    //check if second array has the value equal to the power of 2 of the value of first array
    const currIndex = arr2.indexOf(value ** 2);
    if (currIndex === -1) {
      return false;
    }
    //delete the value at that particular index
    arr2.splice(currIndex, 1);
  }
  return true;
}

const res = naiveSame([1, 2, 3, 2], [9, 1, 4, 1]);
console.log(res);
