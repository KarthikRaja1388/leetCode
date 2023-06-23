/**
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error,
 * one of the numbers in s got duplicated to another number in the set,  which results in repetition of one number and loss of another number.
 *
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers
 * in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
 */

let s = new Set([1, 2, 3, 4, 5]);
let initalArr = Array.from(s);
nums = [1, 5, 3, 4, 5];

function findDuplicate(initialData, dataWithError) {
  let result = [];

  initalArr.filter((element) => {
    if (!nums.includes(element)) {
      result.push(initalArr.indexOf(element), element);
    }
  });
  return result;
}

console.log(findDuplicate(initalArr, nums));
