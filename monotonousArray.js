/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
 * monotone decreasing if for all i <= j, nums[i] >= nums[j].
 *
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 *
 * Example 1:
 * Input: nums = [1,2,2,3]
 *
 * Output: true
 */
let nums = [1, 2, 3, 4, 5, 7];

function isMontonous(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) return false;
      }

      return true;
    } else if (arr[i] > arr[i + 1]) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) return false;
      }

      return true;
    }
  }
}
console.log(isMontonous(nums));
