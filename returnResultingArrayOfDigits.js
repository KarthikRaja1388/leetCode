/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.
 */

const digits = [1, 2, 3];

function incrementTheLargeInt(digits) {
  let nums = "";

  digits.forEach((element) => {
    nums += String(element);
  });

  let result = String(parseInt(nums) + 1);
  return [...result];
}

console.log(incrementTheLargeInt(digits));
