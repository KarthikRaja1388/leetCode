/**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]


 */
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4];

function incrementByOne(digits) {
  let digitsToString = "";
  for (let i = 0; i < digits.length; i++) {
    digitsToString += digits[i];
  }

  const bigInt = BigInt(digitsToString);
  return [...String(bigInt + 1n)];
}

console.log(incrementByOne(digits));
