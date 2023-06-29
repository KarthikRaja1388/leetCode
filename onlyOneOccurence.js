/**
 * Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
 */

let nums = [2, 2, 1];
function findSingleOccurence(nums) {
  let frequency = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element in frequency) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  console.log(frequency);

  for (let j = 0; j < nums.length; j++) {
    let num = nums[j];

    if (frequency[num] === 1) {
      return num;
    }
  }
}

console.log(findSingleOccurence(nums));
