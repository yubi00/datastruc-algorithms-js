function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, end - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = end + 1;
  }
  // console.log(str.slice(start));
  return longest;
}

const res = findLongestSubstring("abcdbe");
console.log(res);

function simpleLongestSubstring(str) {
  if (str.length === 0) return 0;
  let i = 0;
  let j = 0;
  let store = new Map();

  let max = 0;

  while (j < str.length) {
    let char = str[j];
    if (!store.has(char)) {
      store.set(char);
      j++;

      max = Math.max(store.size, max);
    } else {
      store.delete(str[i]);
      console.log(store);
      i++;
    }
  }
  console.log(str.slice(i));
  return max;
}

const result = simpleLongestSubstring("abcdbe");
console.log(result);
