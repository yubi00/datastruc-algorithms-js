function anagram(str1, str2) {
  //edge cases
  if (str1.length !== str2.length) {
    return false;
  }

  //loop through the first string and check if each charracter exist in the second string
  for (char of str1) {
    const index = str2.indexOf(char);
    if (index === -1) {
      return false;
    }
    str2.slice(0, index - 1) + str2.slice(index + 1);
  }

  return true;
}

const res = anagram("hello", "ohelld");
//console.log(res);

function betterAnagram(str1, str2) {
  //edge cases
  if (str1.length !== str2.length) {
    return false;
  }
  const storeone = {};
  const storetwo = {};

  for (key of str1) {
    storeone[key] = ++storeone[key] || 1;
  }

  for (key of str2) {
    storetwo[key] = ++storetwo[key] || 1;
  }

  console.log(storeone);
  console.log(storetwo);

  //loop through the key of first store and check if that key exist in the second store
  for (key in storeone) {
    if (!storetwo[key]) {
      return false;
    }

    //check if the occurences of each letter in both of the str are equal
    if (storeone[key] !== storetwo[key]) {
      return false;
    }
  }

  //if everything satisfies, return true
  return true;
}

const res2 = betterAnagram("", "");
console.log(res2);
