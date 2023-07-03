/**
 * Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,
 * return a sorted array of only the integers that appeared in all three arrays.
 *
 * Example 1:
 * Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
 * Output: [1,5]
 *
 * Explanation: Only 1 and 5 appeared in the three arrays.
 */

let arr1 = [1, 2, 3, 4, 5, 9],
  arr2 = [1, 2, 5, 7, 9],
  arr3 = [1, 3, 4, 5, 8, 9];

function getTheCommonValues(arr1, arr2, arr3) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
          result.push(arr1[i]);
        }
      }
    }
  }

  return result;
}

console.log(getTheCommonValues(arr1, arr2, arr3));
