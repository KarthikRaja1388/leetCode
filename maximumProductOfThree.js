/**
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: 6
 */
let nums = [1, 2, 3, 6, 7, 7];

function findMaxProduct(arr) {
  let resulSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let result = arr[i] * arr[j] * arr[k];
        resulSet.add(result);
      }
    }
  }
  let maxProduct = Array.from(resulSet);

  return Math.max(...maxProduct);
}

console.log(findMaxProduct(nums));
