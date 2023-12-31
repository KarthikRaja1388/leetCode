/**
💡 **Question 7**
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

**Example 1:**
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

**Explanation:** The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]

 */

let nums = [0, 1, 3, 50, 75, 90, 98],
  lower = 0,
  upper = 99;

function findTheRange(nums, lower, upper) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] <= 1) {
      continue;
    } else {
      if (i === nums.length - 1) {
        result.push([nums[nums.length - 1] + 1, upper]);
        break;
      }

      result.push([nums[i] + 1, nums[i + 1] - 1]);
    }
  }
  return result;
}

console.log(findTheRange(nums, lower, upper));
