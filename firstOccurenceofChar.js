/**
 * First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

let s = "leetcode";

function nonRepeatingIndex(str) {
  let chars = [...str];
  let frequency = {};

  for (let i = 0; i < chars.length; i++) {
    const element = chars[i];
    if (element in frequency) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  for (let j = 0; j < chars.length; j++) {
    let char = chars[j];

    if (frequency[char] === 1) {
      return j;
    }
  }
}

console.log(nonRepeatingIndex(s));
