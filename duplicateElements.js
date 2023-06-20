/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct
 */

const nums = [1, 2, 3, 2];

function checkDuplicateOccurence(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else if (arr[i] === arr[j]) {
        counter++;
      }
    }
  }
  if (counter > 1) {
    return true;
  } else {
    return false;
  }
}

console.log(checkDuplicateOccurence(nums));
