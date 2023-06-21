/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */
const nums = [1, 3, 4, 5, 9, 10],
  target = 2;

function getIndexOfTarget(nums, target) {
  let startingIndex = 0;
  let finalIndex = nums.length - 1;

  while (startingIndex <= finalIndex) {
    let midIndex = Math.ceil((startingIndex + finalIndex) / 2);

    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] < target) {
      startingIndex = midIndex + 1;
    } else {
      finalIndex = midIndex - 1;
    }
  }
  return startingIndex;
}

console.log(getIndexOfTarget(nums, target));
