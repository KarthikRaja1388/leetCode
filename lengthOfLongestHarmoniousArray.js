/**
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

**Example 1:**
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

**Explanation:** The longest harmonious subsequence is [3,2,2,2,3].

 */

let nums = [1, 3, 2, 2, 5, 2, 3, 7, 3, 4];

function getLongestHarmony(arr) {
  let sortedArray = arr.sort();

  let left = 0,
    right = 1,
    result = 0;

  while (right < arr.length) {
    let difference = arr[right] - arr[left];

    if (difference === 1) {
      result = Math.max(result, right - left + 1);
    }

    if (difference <= 1) {
      right++;
    } else {
      left++;
    }
  }
  return result;
}

console.log(getLongestHarmony(nums));
