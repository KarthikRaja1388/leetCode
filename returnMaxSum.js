/**
 * Given an integer array nums of 2n integers, group these integers into n pairs
 * (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 */

let nums = [1, 4, 3, 2];

function getMaxSum(arr) {
  let arrayGroup = [];
  let resultAray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        continue;
      } else {
        arrayGroup.push([arr[i], arr[j]]);
      }
    }
  }

  for (let k = 0; k < arrayGroup.length; k += 2) {
    let sum = Math.min(...arrayGroup[k]) + Math.min(...arrayGroup[k + 1]);
    resultAray.push(sum);
  }
  return Math.max(...resultAray);
}
console.log(getMaxSum(nums));
