function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  //edge case
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

const res = isSubsequence("abc", "abdec");
console.log(res);
