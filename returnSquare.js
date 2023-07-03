/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * Example 1:
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 */

let nums = [-4, -1, 0, 3, 10];

function returnSquare(nums) {
  let result = nums.map((element) => element * element);
  return result.sort((a, b) => a - b);
}

console.log(returnSquare(nums));
