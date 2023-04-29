/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

const numbersA1 = [20, 10, 30];
const numbersB1 = [10, 30, 20];
const expectedA1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 */
function sumArrColumns(nums1, nums2) {
  const retVal = [];
  for (let i = 0; i < nums1.length; i++) {
    retVal.push(nums1[i] + nums2[i]);
  }
  return retVal;
}

console.log(sumArrColumns(numbersA1, numbersB1), expectedA1);

/*****************************************************************************/

/* 
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

Given an array, rotate the array in place to the right by "k" steps, where "k" is
non-negative.

The given array must be mutated, do not return a new array.
*/

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const expected1 = [5, 6, 7, 1, 2, 3, 4];
/* Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
const expected2 = [3, 99, -1, -100];
/* Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

const nums3 = [1, 2, 3, 4];
const k3 = 4;
const expected3 = [1, 2, 3, 4];
/* Explanation: 
After 4 rotations it is back to it's starting point.
*/

const nums4 = [1, 2];
const k4 = 5;
const expected4 = [2, 1];
/* 
Explanation: After 2 rotations the array is back to it's original order.
After 4 rotations it is back to it's original order again.
1 more rotation makes 5.
*/

/**
 * Rotates the array items to the right "k" times.
 */
function rotate(nums, k) {
  const modK = k % nums.length;
  for (let i = 0; i < modK; i++) {
    const temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
  }
  return nums;
}

console.log(rotate(nums1, k1), expected1);
console.log(rotate(nums2, k2), expected2);
console.log(rotate(nums3, k3), expected3);
console.log(rotate(nums4, k4), expected4);
