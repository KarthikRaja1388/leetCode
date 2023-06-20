/**
💡 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.


 */
const nums = [0, 1, 0, 3, 12, 0];

function pushZeroesToEnd(arr) {
  let numberArray = [];
  let zeroArray = [];

  arr.forEach((element) => {
    if (element === 0) {
      zeroArray.push(element);
    } else {
      numberArray.push(element);
    }
  });

  let result = [...numberArray, ...zeroArray];
  return result;
}

console.log(pushZeroesToEnd(nums));
