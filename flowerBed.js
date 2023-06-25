/**
 * You have a long flowerbed in which some of the plots are planted, and some are not.
    However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers 
    can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


    **Example 1:**
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true
 */

let flowerbed = [1, 0, 0, 0, 1, 0, 0],
  n = 2;
let count = 0;

function plantFlower(arr, numberOfFlowers) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 0 &&
      (i === 0 || arr[i - 1] === 0) &&
      (i === arr.length - 1 || arr[i + 1] === 0)
    ) {
      arr[i] = 1;
      count++;
    }
    if (count === numberOfFlowers) {
      return true;
    }
  }
  return false;
}

console.log(plantFlower(flowerbed, n));
