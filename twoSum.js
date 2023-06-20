//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

let twoSum = function (nums, target) {
  let result = [];
  for (let counter = 0; counter < nums.length; counter++) {
    for (let i = 0; i < nums.length; i++) {
      if (counter === i) continue;
      let sum = nums[counter] + nums[i];
      if (sum === target) {
        result.push(counter, i);
        break;
      }
    }
    if (result.length !== 0) break;
  }

  return result;
};
// Please pass an array and a target when invoking the function
// I have already solved this in leetcode, please find them here https://leetcode.com/submissions/detail/963369908/
